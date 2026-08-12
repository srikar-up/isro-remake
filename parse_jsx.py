import re
import sys

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Let's track tags accurately
# First strip strings ("...", '...', `...`) inside tags to avoid false matches
# Strip JSX comments {/* ... */}
clean = re.sub(r'\{\/\*[\s\S]*?\*\/\}', '', code)

# Let's tokenise tags
# Tag regex: </?([a-zA-Z0-9\._]+)(\s[^>]*?)?(/\s*)?>
lines = clean.split('\n')
stack = []

for line_num, line in enumerate(lines, 1):
    # Find all tag-like patterns in line
    pos = 0
    while pos < len(line):
        idx = line.find('<', pos)
        if idx == -1:
            break
        
        # Check if this is a tag or JS comparison (e.g. fontSize < 22 or a < b)
        # Match tag name
        m = re.match(r'<(/)?([a-zA-Z0-9\._]+)', line[idx:])
        if m:
            is_close = bool(m.group(1))
            tag_name = m.group(2)
            
            # Find ending > for this tag
            end_idx = line.find('>', idx)
            if end_idx != -1:
                full_tag = line[idx:end_idx+1]
                is_self_closing = full_tag.endswith('/>') or tag_name.lower() in ['img', 'br', 'hr', 'input', 'source', 'meta', 'link']
                
                if not is_self_closing:
                    if is_close:
                        if stack:
                            top = stack.pop()
                            if top['name'] != tag_name:
                                print(f"MISMATCH at line {line_num}: </{tag_name}> closed, but expected </{top['name']}> (opened at line {top['line']})")
                        else:
                            print(f"EXTRA CLOSING TAG at line {line_num}: </{tag_name}> with empty stack")
                    else:
                        stack.append({'name': tag_name, 'line': line_num})
                pos = end_idx + 1
            else:
                pos = idx + 1
        else:
            pos = idx + 1

print("\n--- UNCLOSED TAGS AT END OF FILE ---")
for item in stack:
    print(f"  <{item['name']}> opened at line {item['line']}")
