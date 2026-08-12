const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'src/App.jsx'), 'utf8');

let out = '';

function tryParse() {
  try {
    const esbuild = require('esbuild');
    out += 'Trying esbuild...\n';
    esbuild.transformSync(code, { loader: 'jsx' });
    out += 'NO_SYNTAX_ERROR according to esbuild!\n';
    return;
  } catch (err) {
    out += 'ESBUILD ERROR:\n' + err.message + '\n';
    return;
  }
}

tryParse();
fs.writeFileSync(path.join(__dirname, 'result.txt'), out);
