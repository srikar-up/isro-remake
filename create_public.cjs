const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'image files', 'eart png.png');
const publicDir = path.join(__dirname, 'public');
const publicEarth = path.join(publicDir, 'earth.png');
const publicEart = path.join(publicDir, 'eart png.png');

fs.mkdirSync(publicDir, { recursive: true });

if (fs.existsSync(srcFile)) {
  fs.copyFileSync(srcFile, publicEarth);
  fs.copyFileSync(srcFile, publicEart);
  console.log('PUBLIC_ASSETS_CREATED_SUCCESSFULLY');
} else {
  console.error('Source file missing:', srcFile);
}
