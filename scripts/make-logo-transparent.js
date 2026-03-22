const sharp = require("sharp");
const path = require("path");

const INPUT = path.join(__dirname, "..", "public", "images", "logo.jpg");
const OUT_LOGO = path.join(__dirname, "..", "public", "images", "logo.png");
const OUT_EMBLEM = path.join(__dirname, "..", "public", "images", "logo-emblem.png");

async function main() {
  const { data, info } = await sharp(INPUT).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Sample background color from top-left 10x10 block
  let bgR = 0, bgG = 0, bgB = 0;
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const idx = (y * width + x) * 3;
      bgR += data[idx];
      bgG += data[idx + 1];
      bgB += data[idx + 2];
    }
  }
  bgR = Math.round(bgR / 100);
  bgG = Math.round(bgG / 100);
  bgB = Math.round(bgB / 100);
  console.log(`Background: rgb(${bgR}, ${bgG}, ${bgB}), Image: ${width}x${height}`);

  // Circle emblem measurements (from pixel analysis)
  const circleCx = 668, circleCy = 330, circleR = 148;
  // Tagline region: y > 391 (where main Chai/Bar text ends on left side)
  const taglineY = 391;

  // --- FULL LOGO (transparent bg, tagline text removed) ---
  const logoRgba = Buffer.alloc(width * height * 4);
  const threshold = 38;
  const feather = 15;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 3;
      const dstIdx = (y * width + x) * 4;
      const r = data[srcIdx], g = data[srcIdx + 1], b = data[srcIdx + 2];
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      logoRgba[dstIdx] = r;
      logoRgba[dstIdx + 1] = g;
      logoRgba[dstIdx + 2] = b;

      // Background detection
      let alpha = dist < threshold ? 0 : dist < threshold + feather ? Math.round(((dist - threshold) / feather) * 255) : 255;

      // In the tagline zone (y > taglineY), only keep pixels inside the circle
      if (y > taglineY && alpha > 0) {
        const dx = x - circleCx;
        const dy = y - circleCy;
        const distFromCircle = Math.sqrt(dx * dx + dy * dy);
        if (distFromCircle > circleR + 5) {
          alpha = 0; // Remove tagline text outside circle
        }
      }

      logoRgba[dstIdx + 3] = alpha;
    }
  }

  await sharp(logoRgba, { raw: { width, height, channels: 4 } })
    .png()
    .trim()
    .toFile(OUT_LOGO);
  const logoMeta = await sharp(OUT_LOGO).metadata();
  console.log(`Saved logo: ${logoMeta.width}x${logoMeta.height}`);

  // --- CIRCLE EMBLEM ---
  const emblemSize = circleR * 2;
  const eLeft = circleCx - circleR;
  const eTop = circleCy - circleR;

  const { data: cropData } = await sharp(INPUT)
    .extract({ left: eLeft, top: eTop, width: emblemSize, height: emblemSize })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const emblemRgba = Buffer.alloc(emblemSize * emblemSize * 4);
  for (let y = 0; y < emblemSize; y++) {
    for (let x = 0; x < emblemSize; x++) {
      const srcIdx = (y * emblemSize + x) * 3;
      const dstIdx = (y * emblemSize + x) * 4;
      const r = cropData[srcIdx], g = cropData[srcIdx + 1], b = cropData[srcIdx + 2];
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      emblemRgba[dstIdx] = r;
      emblemRgba[dstIdx + 1] = g;
      emblemRgba[dstIdx + 2] = b;
      let alpha = dist < threshold ? 0 : dist < threshold + feather ? Math.round(((dist - threshold) / feather) * 255) : 255;

      // Circular mask
      const dx = x - circleR, dy = y - circleR;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > circleR) alpha = 0;
      else if (d > circleR - 2) alpha = Math.min(alpha, Math.round((circleR - d) / 2 * 255));

      emblemRgba[dstIdx + 3] = alpha;
    }
  }

  await sharp(emblemRgba, { raw: { width: emblemSize, height: emblemSize, channels: 4 } })
    .png()
    .resize(256, 256)
    .toFile(OUT_EMBLEM);
  console.log(`Saved emblem: 256x256`);
}

main().catch(console.error);
