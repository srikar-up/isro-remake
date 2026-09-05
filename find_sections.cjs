const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('<section') || (line.includes('id=') && (line.includes('programmes') || line.includes('centres') || line.includes('resources') || line.includes('portals') || line.includes('missions') || line.includes('launchers') || line.includes('features') || line.includes('news')))) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
