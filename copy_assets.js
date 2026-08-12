import fs from 'fs';
import path from 'path';

const srcImg = path.join(process.cwd(), 'image files', 'earth.png');

if (fs.existsSync(srcImg)) {
  fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), 'src', 'assets'), { recursive: true });
  
  fs.copyFileSync(srcImg, path.join(process.cwd(), 'public', 'earth.png'));
  fs.copyFileSync(srcImg, path.join(process.cwd(), 'src', 'assets', 'earth.png'));
  fs.copyFileSync(srcImg, path.join(process.cwd(), 'src', 'earth.png'));
  
  console.log('ASSETS_SUCCESSFULLY_COPIED');
} else {
  console.error('Source image not found:', srcImg);
}
