const sharp = require('sharp');
const fs = require('fs');

async function optimizeImage() {
  // Convert to WebP
  await sharp('./public/profile.jpg')
    .webp({ quality: 85 })
    .toFile('./public/profile.webp');

  // Generate low-resolution placeholder
  const { base64 } = await sharp('./public/profile.jpg')
    .resize(40, 40) // Resize to low resolution
    .toBuffer()
    .then(data => ({ base64: `data:image/jpeg;base64,${data.toString('base64')}` }));

  fs.writeFileSync('./public/profile-blurDataURL.txt', base64);
}

optimizeImage();