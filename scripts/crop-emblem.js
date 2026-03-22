const sharp = require('sharp');

async function run() {
  const meta = await sharp('public/images/logo.jpg').metadata();
  const size = Math.round(meta.height * 0.82);
  const left = Math.round((meta.width - size) / 2);
  const top = Math.round((meta.height - size) / 2);
  await sharp('public/images/logo.jpg')
    .extract({ left, top, width: size, height: size })
    .png()
    .toFile('public/images/logo-emblem.png');
  console.log('Done — public/images/logo-emblem.png created');
}
run();
