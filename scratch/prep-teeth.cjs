const sharp = require("sharp");
const dir = "public/assets/allon4/";
const files = ["pmma-temporary-teeth", "acrylic-final-teeth", "zirconia-final-teeth"];
const W = 1600, H = 800;
(async () => {
  for (const f of files) {
    const src = dir + f + ".jpeg";
    const trimmed = await sharp(src).trim({ background: "#000", threshold: 28 }).toBuffer({ resolveWithObject: true });
    console.log(f, "trimmed to", trimmed.info.width, "x", trimmed.info.height);
    const body = await sharp(trimmed.data)
      .resize({ width: Math.round(W * 0.86), height: Math.round(H * 0.86), fit: "inside", kernel: "lanczos3" })
      .modulate({ saturation: 1.06 })
      .sharpen({ sigma: 1.1, m1: 0.8, m2: 2 })
      .toBuffer();
    await sharp({ create: { width: W, height: H, channels: 3, background: "#000" } })
      .composite([{ input: body, gravity: "center" }])
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(dir + f + ".jpg");
  }
})();
