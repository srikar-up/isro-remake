const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'src/App.jsx'), 'utf8');
const babel = require(path.join(__dirname, 'node_modules/@babel/parser'));

let res = '';
try {
  babel.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  res = 'PARSED_SUCCESSFULLY';
} catch (err) {
  res = 'BABEL_ERROR: ' + err.message + '\n';
  if (err.loc) {
    res += `Line: ${err.loc.line}, Col: ${err.loc.column}\n`;
    const lines = code.split('\n');
    const start = Math.max(0, err.loc.line - 15);
    const end = Math.min(lines.length, err.loc.line + 5);
    for (let i = start; i < end; i++) {
      res += `${i + 1 === err.loc.line ? '>> ' : '   '}${i + 1}: ${lines[i]}\n`;
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'babel_out.txt'), res);
console.log('DONE_BABEL_PARSE');
