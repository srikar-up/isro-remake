const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'image files', 'eart png.png');
const dstPublic = path.join(__dirname, 'public', 'earth.png');
const dstPublicSpace = path.join(__dirname, 'public', 'eart png.png');
const dstAssets = path.join(__dirname, 'src', 'assets', 'earth.png');

try {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
  fs.mkdirSync(path.join(__dirname, 'src', 'assets'), { recursive: true });

  fs.copyFileSync(srcFile, dstPublic);
  fs.copyFileSync(srcFile, dstPublicSpace);
  fs.copyFileSync(srcFile, dstAssets);

  console.log('SUCCESSFULLY_COPIED_EARTH_PNG_TO_ASSETS');
} catch (e) {
  console.error('ERROR_COPYING:', e.message);
}
