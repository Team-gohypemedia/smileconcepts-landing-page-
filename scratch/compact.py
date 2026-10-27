p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n, count=1):
    global s
    assert s.count(o) == count, (s.count(o), o[:70])
    s = s.replace(o, n)

# 1. remove the enlarge/fill step and its reset
a = s.index('      else {\n        container.style.setProperty("--sc-stack-h"')
b = s.index('        });\n      }\n', a) + len('        });\n      }\n')
s = s[:a] + '      else container.style.setProperty("--sc-stack-h", `${Math.ceil(tallest)}px`);\n' + s[b:]
a = s.index('      const contentOf = ')
b = s.index('      container.style.setProperty("--sc-stack-h", "0px");')
s = s[:a] + s[b:]

# 2. CSS comment + tighter desktop padding
r('''          /* Cards share the tallest card's height. Shorter cards' text is enlarged a little
             (see the fill step in the effect) and any space left over is split above and below */
          .sc-stack-text > div:first-child {
            margin-block: auto;
          }''', '''          /* Cards share the tallest card's height; shorter cards' text sits centred */
          .sc-stack-text {
            padding: clamp(1.25rem, 2.2vw, 2rem) clamp(1.35rem, 2.6vw, 2.25rem) !important;
          }
          .sc-stack-text > div:first-child {
            margin-block: auto;
          }''')

# 3. Recovery card back to a compact size
a = s.index('Recovery, Aftercare &amp; Ongoing Maintenance after All on 4 Implant Surgery')
b = s.index('1 of 3 • Recovery &amp; Maintenance')
seg = s[a:b]
for o, n in [
 ('fontSize: "0.97rem", lineHeight: 1.6, color: "#444", margin: "0 0 1rem"', 'fontSize: "0.9rem", lineHeight: 1.55, color: "#444", margin: "0 0 0.8rem"'),
 ('fontSize: "1rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.4rem", lineHeight: 1.35', 'fontSize: "0.92rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.3rem", lineHeight: 1.3'),
 ('color: "#444", fontSize: "0.9rem", lineHeight: 1.6', 'color: "#444", fontSize: "0.82rem", lineHeight: 1.5'),
 ('color: "#333", fontSize: "0.88rem", lineHeight: 1.6', 'color: "#333", fontSize: "0.8rem", lineHeight: 1.5'),
 ('padding: "1rem 1.1rem", borderRadius: "12px"', 'padding: "0.75rem 0.95rem", borderRadius: "12px"'),
 ('gap: "0.85rem" }}>\n                      {/* The First Few Days */}', 'gap: "0.6rem" }}>\n                      {/* The First Few Days */}'),
 ('flexDirection: "column", gap: "0.85rem" }}>', 'flexDirection: "column", gap: "0.6rem" }}>'),
]:
    assert o in seg, o[:50]
    seg = seg.replace(o, n)
s = s[:a] + seg + s[b:]
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
