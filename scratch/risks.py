p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
a = s.index('What You Should Know About Risks Associated with All on 4 Dental Implants')
b = s.index('1 of 3 • Risk Awareness')
seg = s[a:b]
for o, n in [
 ('fontSize: "0.88rem", lineHeight: 1.5, color: "#555", margin: "0 0 0.6rem"', 'fontSize: "0.95rem", lineHeight: 1.6, color: "#444", margin: "0 0 0.9rem"'),
 ('gap: "0.45rem 0.85rem", fontSize: "0.78rem", lineHeight: 1.45, color: "#444"', 'gap: "0.85rem 1.25rem", fontSize: "0.88rem", lineHeight: 1.6, color: "#333"'),
]:
    assert seg.count(o) == 1, o[:50]
    seg = seg.replace(o, n)
s = s[:a] + seg + s[b:]
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
