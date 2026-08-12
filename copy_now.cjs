const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'image files', 'eart png.png');
const targetAssets = path.join(__dirname, 'src', 'assets', 'earth.png');
const targetPublic = path.join(__dirname, 'public', 'earth.png');

fs.mkdirSync(path.dirname(targetAssets), { recursive: true });
fs.mkdirSync(path.dirname(targetPublic), { recursive: true });

fs.copyFileSync(srcFile, targetAssets);
fs.copyFileSync(srcFile, targetPublic);

console.log('SUCCESSFULLY_COPIED_ASSETS');
