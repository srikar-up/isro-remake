const fs = require('fs');

const code = fs.readFileSync('src/App.jsx', 'utf8');

const errors = [];

// 1. Check for 'class=' instead of 'className=' in JSX
const classMatches = code.match(/<[a-zA-Z0-9\-_]+\s+[^>]*class\s*=/g);
if (classMatches) {
  errors.push(`Found ${classMatches.length} instance(s) of 'class=' instead of 'className=' in JSX.`);
}

// 2. Check for 'for=' instead of 'htmlFor=' in JSX
const forMatches = code.match(/<[a-zA-Z0-9\-_]+\s+[^>]*for\s*=/g);
if (forMatches) {
  errors.push(`Found ${forMatches.length} instance(s) of 'for=' instead of 'htmlFor=' in JSX.`);
}

// 3. Check for inline style string in JSX like style="..."
const styleMatches = code.match(/style\s*=\s*"[^"]*"/g);
if (styleMatches) {
  errors.push(`Found ${styleMatches.length} instance(s) of string style attribute in JSX.`);
}

// 4. Check for unescaped HTML comments like <!-- ... --> inside JSX
const commentMatches = code.match(/<!--[\s\S]*?-->/g);
if (commentMatches) {
  errors.push(`Found ${commentMatches.length} HTML comment(s) '<!-- -->'; use '{/* */}' in JSX.`);
}

let res = 'VALIDATION_RESULTS:\n';
if (errors.length === 0) {
  res += 'NO_REACT_SYNTAX_ERRORS_FOUND\n';
} else {
  errors.forEach(e => { res += 'ERROR: ' + e + '\n'; });
}

fs.writeFileSync('val_result.txt', res);
console.log(res);
