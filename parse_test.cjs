const fs = require('fs');
const babel = require('./node_modules/@babel/parser');

const code = fs.readFileSync('src/App.jsx', 'utf8');

try {
  babel.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  console.log('PARSED SUCCESSFULLY!');
} catch (err) {
  console.log('BABEL ERROR MESSAGE:', err.message);
  console.log('LOCATION:', err.loc);
}
