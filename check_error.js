import fs from 'fs';
import esbuild from 'esbuild';

const code = fs.readFileSync('src/App.jsx', 'utf8');

try {
  esbuild.transformSync(code, { loader: 'jsx' });
  fs.writeFileSync('validation_pass.txt', 'SUCCESS: App.jsx parsed with NO errors!');
  console.log('SUCCESS');
} catch (err) {
  fs.writeFileSync('validation_pass.txt', 'FAILED: ' + err.message);
  console.log('FAILED');
}
process.exit(0);
