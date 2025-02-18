const fs = require("fs");

async function generateBlurDataURL() {
  const { getPlaiceholder } = await import("plaiceholder");
  const { base64 } = await getPlaiceholder("./public/profile.jpg");
  fs.writeFileSync("./public/profile-blurDataURL.txt", base64);
}

generateBlurDataURL();