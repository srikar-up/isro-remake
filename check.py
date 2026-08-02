import re
import os

code_path = 'src/App.jsx'
output_path = r'C:\Users\LENOVO\.gemini\antigravity-ide\scratch\check_results.txt'

try:
    with open(code_path, 'r', encoding='utf-8') as f:
        code = f.read()

    # remove comments
    clean_code = re.sub(r'\{\/\*[\s\S]*?\*\/\}', '', code)
    clean_code = re.sub(r'<!--[\s\S]*?-->', '', clean_code)
    
    # remove self closing tags
    clean_code = re.sub(r'<[a-zA-Z0-9\-_]+\s+[^>]*\/>', '', clean_code)
    clean_code = re.sub(r'<[a-zA-Z0-9\-_]+\s*\/>', '', clean_code)

    lines = clean_code.split('\n')
    stack = []
    output_lines = []

    tag_pattern = re.compile(r'<\/?([a-zA-Z0-9\-_]+)[^>]*>')

    for idx, line in enumerate(lines):
        line_no = idx + 1
        for match in tag_pattern.finditer(line):
            full = match.group(0)
            tag = match.group(1)
            
            if tag.lower() in ['img', 'br', 'hr', 'input', 'source', 'meta', 'link']:
                continue
                
            if full.startswith('</'):
                if stack:
                    top = stack.pop()
                    if top['tag'] != tag:
                        output_lines.append(f"MISMATCH: line {line_no} close </{tag}> does not match open <{top['tag']}> from line {top['line_no']}")
                        with open(output_path, 'w', encoding='utf-8') as out_f:
                            out_f.write('\n'.join(output_lines))
                        os._exit(1)
                else:
                    output_lines.append(f"EXTRA CLOSE: line {line_no} close </{tag}> has no open tag")
                    with open(output_path, 'w', encoding='utf-8') as out_f:
                        out_f.write('\n'.join(output_lines))
                    os._exit(1)
            else:
                stack.append({'tag': tag, 'line_no': line_no})

    if stack:
        output_lines.append("UNCLOSED TAGS:")
        for t in stack:
            output_lines.append(f"  <{t['tag']}> opened at line {t['line_no']}")
    else:
        output_lines.append("JSX tags are perfectly balanced!")

    with open(output_path, 'w', encoding='utf-8') as out_f:
        out_f.write('\n'.join(output_lines))

except Exception as e:
    with open(output_path, 'w', encoding='utf-8') as out_f:
        out_f.write(f"CRITICAL ERROR: {str(e)}")
print("Done Python check!")
