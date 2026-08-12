const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');
const lines = content.split('\n');

// Simple JSX tag tracker - only tracks from the return statement
let inReturn = false;
const stack = [];
const issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  if (line.trim().startsWith('return (')) {
    inReturn = true;
    continue;
  }
  
  if (!inReturn) continue;

  // Find all opening tags (not self-closing, not closing)
  // Match opening tags like <div, <section, <footer, <header, <nav, <ul, <li, <a, <button, <span, <p, <h3, etc.
  const openRegex = /<(div|section|header|footer|nav|ul|li|button|video)\b/g;
  const closeRegex = /<\/(div|section|header|footer|nav|ul|li|button|video)>/g;
  const selfCloseCheck = /\/>/;
  
  let match;
  
  // Check for self-closing tags first
  const tokens = [];
  
  // Find all tag events in the line
  const allTags = [];
  
  // Opening tags
  const openMatches = [...line.matchAll(/<(div|section|header|footer|nav|ul|li|button|video)\b[^>]*>/g)];
  for (const m of openMatches) {
    const fullTag = m[0];
    const tagName = m[1];
    const isSelfClosing = fullTag.endsWith('/>');
    if (!isSelfClosing) {
      allTags.push({ type: 'open', tag: tagName, pos: m.index });
    }
  }
  
  // Multi-line opening tags that don't close on this line
  const unclosedOpens = [...line.matchAll(/<(div|section|header|footer|nav|ul|li|button|video)\b/g)];
  for (const m of unclosedOpens) {
    if (!line.substring(m.index).includes('>')) {
      // Tag started but doesn't close on this line - we need to look at subsequent lines
      // Skip for now, we'll handle simple cases
    }
  }
  
  // Closing tags
  const closeMatches = [...line.matchAll(/<\/(div|section|header|footer|nav|ul|li|button|video)>/g)];
  for (const m of closeMatches) {
    allTags.push({ type: 'close', tag: m[1], pos: m.index });
  }
  
  // Sort by position
  allTags.sort((a, b) => a.pos - b.pos);
  
  for (const t of allTags) {
    if (t.type === 'open') {
      stack.push({ tag: t.tag, line: lineNum });
    } else {
      if (stack.length === 0) {
        console.log(`Line ${lineNum}: Closing </${t.tag}> with empty stack!`);
      } else {
        const top = stack[stack.length - 1];
        if (top.tag !== t.tag) {
          console.log(`Line ${lineNum}: Mismatched close </${t.tag}>, expected </${top.tag}> (opened at line ${top.line})`);
        }
        stack.pop();
      }
    }
  }
}

console.log('\nRemaining open tags on stack:');
for (const s of stack) {
  console.log(`  <${s.tag}> opened at line ${s.line}`);
}
