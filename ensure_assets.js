const fs = require('fs');
const path = require('path');

const srcImg = path.join(__dirname, 'image files', 'eart png.png');

if (fs.existsSync(srcImg)) {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
  fs.mkdirSync(path.join(__dirname, 'src', 'assets'), { recursive: true });
  
  fs.copyFileSync(srcImg, path.join(__dirname, 'public', 'earth.png'));
  fs.copyFileSync(srcImg, path.join(__dirname, 'public', 'eart png.png'));
  fs.copyFileSync(srcImg, path.join(__dirname, 'src', 'assets', 'earth.png'));
  fs.copyFileSync(srcImg, path.join(__dirname, 'src', 'earth.png'));
  
  console.log('ASSETS_SUCCESSFULLY_COPIED');
} else {
  console.error('Source image not found:', srcImg);
}
