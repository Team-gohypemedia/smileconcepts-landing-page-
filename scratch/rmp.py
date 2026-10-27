p = 'src/components/sections/Testimonials.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
a = s.index('          <p\n            style={{\n              fontFamily: "var(--font-assistant), sans-serif",\n              fontSize: "var(--fs-body)",\n              color: "#555869",')
b = s.index('          </p>\n', a) + len('          </p>\n')
assert 'Read what our patients say' in s[a:b]
s = s[:a].rstrip('\n') + '\n' + s[b:]
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
