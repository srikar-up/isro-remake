const fs = require('fs');
const babel = require('@babel/parser');

const code = fs.readFileSync('src/App.jsx', 'utf8');

try {
  babel.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  console.log('NO_SYNTAX_ERROR: Code parses successfully!');
} catch (err) {
  console.log('EXACT_PARSER_ERROR:', err.message);
  console.log('AT_LOCATION:', err.loc);
  
  const lines = code.split('\n');
  const errLine = err.loc ? err.loc.line : lines.length;
  console.log('AHEAD LINES around error:');
  for (let i = Math.max(0, errLine - 10); i < Math.min(lines.length, errLine + 5); i++) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
