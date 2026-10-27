const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const assert = require("node:assert/strict");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "showcase-browser-"));
const browser = spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [
  "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
  "--remote-debugging-port=0", "--user-data-dir=" + profile,
  "--window-size=1440,900", "about:blank"
], { windowsHide: true, stdio: "ignore" });
let command, socket;
async function main() {
  const portFile = path.join(profile, "DevToolsActivePort");
  for (let i = 0; !fs.existsSync(portFile) && i < 60; i++) await sleep(250);
  const port = fs.readFileSync(portFile, "utf8").split("\n")[0];
  const pages = await (await fetch("http://127.0.0.1:" + port + "/json")).json();
  const target = pages.find(page => page.type === "page");
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const pending = new Map();
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (!pending.has(message.id)) return;
    const { resolve, reject, timer } = pending.get(message.id);
    pending.delete(message.id);
    clearTimeout(timer);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  };
  command = (method, params = {}) => new Promise((resolve, reject) => {
    const next = ++id;
    const timer = setTimeout(() => { pending.delete(next); reject(new Error("Browser timeout: " + method)); }, 10000);
    pending.set(next, { resolve, reject, timer });
    socket.send(JSON.stringify({ id: next, method, params }));
  });
  const evaluate = async expression => {
    const value = await command("Runtime.evaluate", { expression, returnByValue: true });
    if (value.exceptionDetails) throw new Error(JSON.stringify(value.exceptionDetails));
    return value.result.value;
  };
  assert.equal(await evaluate("1+1"), 2);
  console.log("Browser renderer responds.");
  await command("Page.navigate", { url: "http://localhost:3000" });
  for (let i = 0; i < 40; i++) {
    if (await evaluate('!!document.querySelector(".sc-scroll-desktop-view .pin-spacer")')) break;
    await sleep(500);
  }
  await sleep(2000);
  const state = () => evaluate(`(() => {
    const section = document.querySelector(".sc-scroll-desktop-view");
    const visible = el => getComputedStyle(el).visibility !== "hidden";
    return {
      scrollY,
      start: section.getBoundingClientRect().top + scrollY,
      texts: [...section.querySelectorAll(".sc-showcase-right-inner")].filter(visible).map(el => el.querySelector("h2,h3").textContent.trim()),
      images: [...section.querySelectorAll(".sc-showcase-left > div")].filter(visible).length
    };
  })()`);
  const initial = await state();
  await evaluate(`window.__lenis.scrollTo(${initial.start + 2}, {immediate:true})`);
  await sleep(1000);
  const seen = new Set();
  for (let i = 0; i < 6; i++) {
    const result = await state();
    console.log("Forward", i, JSON.stringify(result));
    if (result.scrollY <= initial.start + 480) {
      assert.equal(result.texts.length, 1);
      assert.equal(result.images, 1);
      seen.add(result.texts[0]);
    }
    await command("Input.dispatchMouseEvent", { type: "mouseWheel", x: 1000, y: 450, deltaX: 0, deltaY: 120 });
    await sleep(1500);
  }
  assert.equal(seen.size, 5, "All five slides are reachable with wheel gestures");
  assert.ok((await state()).scrollY > initial.start + 480, "Normal scrolling exits after last slide");
  for (let i = 0; i < 12; i++) {
    await command("Input.dispatchMouseEvent", { type: "mouseWheel", x: 1000, y: 450, deltaX: 0, deltaY: -120 });
    await sleep(50);
  }
  await sleep(1800);
  assert.ok((await state()).scrollY < initial.start, "Continuous reverse scrolling exits the section");
  console.log("PASS: five slides, no overlap, normal exit and continuous reverse scroll.");
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (command) await command("Browser.close").catch(() => {});
  socket?.close();
  browser.kill();
});
