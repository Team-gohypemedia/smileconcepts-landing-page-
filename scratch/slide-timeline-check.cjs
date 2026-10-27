const { gsap } = require("gsap");
const nodes = Array.from({ length: 5 }, (_, i) => ({ opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 }));
const timeline = gsap.timeline({ paused: true });
for (let i = 1; i < nodes.length; i++) {
  const at = (i - 1) * 2;
  timeline.to(nodes[i - 1], { opacity: 0, y: -25, duration: 0.45 }, at);
  timeline.fromTo(nodes[i], { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5 }, at + 0.55);
  timeline.to({}, { duration: 0.4 });
}
for (const time of [0, 1, 2, 3, 4, 5, 6, 6.5, 7, 8]) {
  timeline.time(time);
  console.log(time, nodes.map((node) => node.opacity));
}
