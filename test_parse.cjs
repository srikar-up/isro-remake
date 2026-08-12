const fs = require('fs');
const path = require('path');
const babel = require('./node_modules/@babel/parser');

const code = fs.readFileSync('src/App.jsx', 'utf8');

let out = '';
try {
  babel.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  out = 'NO_SYNTAX_ERROR: App.jsx parses cleanly!';
} catch (err) {
  out = 'SYNTAX_ERROR: ' + err.message + '\n';
  if (err.loc) {
    out += `Line ${err.loc.line}, Col ${err.loc.column}\n`;
    const lines = code.split('\n');
    const start = Math.max(0, err.loc.line - 10);
    const end = Math.min(lines.length, err.loc.line + 5);
    for (let i = start; i < end; i++) {
      out += `${i + 1 === err.loc.line ? '>> ' : '   '}${i + 1}: ${lines[i]}\n`;
    }
  }
}

fs.writeFileSync('err_log.txt', out);
console.log(out);
