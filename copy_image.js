const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'image files', 'eart png.png');
const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

if (fs.existsSync(srcFile)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  fs.copyFileSync(srcFile, path.join(publicDir, 'earth.png'));
  fs.copyFileSync(srcFile, path.join(publicDir, 'eart png.png'));
  fs.copyFileSync(srcFile, path.join(srcDir, 'earth.png'));
  console.log('Successfully copied earth image to public/ and src/');
} else {
  console.error('Source file does not exist:', srcFile);
}
