const fs = require('fs');

const code = fs.readFileSync('src/App.jsx', 'utf8');
const lines = code.split('\n');

const stack = [];

lines.forEach((lineText, idx) => {
  const lineNo = idx + 1;
  // Remove string literals inside JS expressions to avoid quotes/brackets inside strings
  let s = lineText.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''").replace(/`[^`]*`/g, '``');
  // Remove self-closing tags
  s = s.replace(/<[a-zA-Z0-9\-_]+\s*[^>]*\/>/g, '');
  
  const regex = /<\/?([a-zA-Z0-9\-_]+)[^>]*>/g;
  let match;
  while ((match = regex.exec(s)) !== null) {
    const full = match[0];
    const tag = match[1];
    if (['img', 'br', 'hr', 'input', 'source', 'meta', 'link'].includes(tag.toLowerCase())) continue;
    
    if (full.startsWith('</')) {
      if (stack.length > 0 && stack[stack.length - 1].tag === tag) {
        stack.pop();
      } else {
        console.log(`Mismatch on line ${lineNo}: tag </${tag}>, top of stack was <${stack.length > 0 ? stack[stack.length - 1].tag : 'EMPTY'}> from line ${stack.length > 0 ? stack[stack.length - 1].lineNo : 0}`);
      }
    } else {
      stack.push({ tag, lineNo });
    }
  }
});

console.log('Final Stack:', stack);
fs.writeFileSync('tag_report.txt', JSON.stringify(stack, null, 2));
