const fs = require('fs');
const path = require('path');

const outputPath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\scratch\\check_results.txt';

try {
  const code = fs.readFileSync('src/App.jsx', 'utf8');

  // remove comments and self-closing tags
  const cleanCode = code
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[a-zA-Z0-9\-_]+\s+[^>]*\/>/g, '')
    .replace(/<[a-zA-Z0-9\-_]+\s*\/>/g, '');

  const lines = cleanCode.split('\n');
  const stack = [];
  let output = '';

  for (let idx = 0; idx < lines.length; idx++) {
    const lineText = lines[idx];
    const lineNo = idx + 1;
    const regex = /<\/?([a-zA-Z0-9\-_]+)[^>]*>/g;
    let match;
    while ((match = regex.exec(lineText)) !== null) {
      const full = match[0];
      const tag = match[1];
      
      // ignore void tags
      if (['img', 'br', 'hr', 'input', 'source', 'meta', 'link'].includes(tag.toLowerCase())) {
        continue;
      }
      
      if (full.startsWith('</')) {
        if (stack.length > 0) {
          const top = stack.pop();
          if (top.tag !== tag) {
            output += `MISMATCH: line ${lineNo} close </${tag}> does not match open <${top.tag}> from line ${top.lineNo}\n`;
            fs.writeFileSync(outputPath, output);
            process.exit(1);
          }
        } else {
          output += `EXTRA CLOSE: line ${lineNo} close </${tag}> has no open tag\n`;
          fs.writeFileSync(outputPath, output);
          process.exit(1);
        }
      } else {
        stack.push({ tag, lineNo });
      }
    }
  }

  if (stack.length > 0) {
    output += `UNCLOSED TAGS:\n`;
    stack.forEach(t => {
      output += `  <${t.tag}> opened at line ${t.lineNo}\n`;
    });
  } else {
    output += 'JSX tags are perfectly balanced!\n';
  }

  fs.writeFileSync(outputPath, output);
} catch (e) {
  fs.writeFileSync(outputPath, 'CRITICAL ERROR: ' + e.message + '\n' + e.stack);
}
console.log('Done!');
