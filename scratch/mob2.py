p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
for t in ['Acrylic on titanium — $10,000', 'Zirconia — $14,000']:
    o = '<strong style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>' + t + '</strong>'
    assert s.count(o) == 1, t
    s = s.replace(o, '<strong className="sc-tier-title" style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>' + t + '</strong>')
o = '''          .sc-stack-text ul {
            font-size: 0.86rem !important;'''
assert s.count(o) == 1
s = s.replace(o, '''          .sc-stack-text .sc-tier-title {
            font-size: 0.98rem !important;
          }
          .sc-stack-text ul {
            font-size: 0.86rem !important;''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
