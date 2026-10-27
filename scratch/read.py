p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')

# ---- Recovery card ----
a = s.index('Recovery, Aftercare &amp; Ongoing Maintenance after All on 4 Implant Surgery')
b = s.index('1 of 3 • Recovery &amp; Maintenance')
seg = s[a:b]
seg = seg.replace('fontSize: "0.88rem", lineHeight: 1.5, color: "#555", margin: "0 0 0.75rem"', 'fontSize: "0.97rem", lineHeight: 1.6, color: "#444", margin: "0 0 1rem"')
seg = seg.replace('fontSize: "0.85rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.25rem"', 'fontSize: "1rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.4rem", lineHeight: 1.35')
seg = seg.replace('color: "#555", fontSize: "0.78rem", lineHeight: 1.45', 'color: "#444", fontSize: "0.9rem", lineHeight: 1.6')
seg = seg.replace('paddingLeft: "1.1rem", margin: 0, color: "#555", fontSize: "0.76rem", lineHeight: 1.45', 'listStyleType: "disc", paddingLeft: "1.2rem", margin: 0, color: "#333", fontSize: "0.88rem", lineHeight: 1.6')
seg = seg.replace('padding: "0.75rem 0.9rem", borderRadius: "10px"', 'padding: "1rem 1.1rem", borderRadius: "12px"')
seg = seg.replace('gap: "0.6rem" }}>\n                      {/* The First Few Days */}', 'gap: "0.85rem" }}>\n                      {/* The First Few Days */}')
seg = seg.replace('flexDirection: "column", gap: "0.6rem" }}>', 'flexDirection: "column", gap: "0.85rem" }}>')
s = s[:a] + seg + s[b:]

# ---- Final teeth card ----
def r(o, n):
    global s
    assert s.count(o) == 1, o[:60]
    s = s.replace(o, n)
r('''                <div style={{ backgroundColor: "#FAF9F6", padding: "1rem", borderRadius: "12px", border: "1px solid #E5E0D7" }}>
                  <strong>Acrylic on titanium — $10,000</strong>
                  <p style={{ margin: "0.4rem 0 0" }}>''', '''                <div style={{ backgroundColor: "#FAF9F6", padding: "1.1rem", borderRadius: "12px", border: "1px solid #E5E0D7" }}>
                  <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.12rem 0.55rem", borderRadius: "999px", backgroundColor: "#ECE7DE", color: "#555", marginBottom: "0.45rem" }}>Mid Tier</span>
                  <strong style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>Acrylic on titanium — $10,000</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", lineHeight: 1.6, color: "#444" }}>''')
r('''                <div style={{ backgroundColor: "#FAF7F2", padding: "1rem", borderRadius: "12px", border: "1px solid #D5CEBF" }}>
                  <strong>Zirconia — $14,000</strong>
                  <p style={{ margin: "0.4rem 0 0" }}>''', '''                <div style={{ backgroundColor: "#FFF8F4", padding: "1.1rem", borderRadius: "12px", border: "1.5px solid #E86337" }}>
                  <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.12rem 0.55rem", borderRadius: "999px", backgroundColor: "#1C1C1E", color: "#fff", marginBottom: "0.45rem" }}>Premium Tier</span>
                  <strong style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>Zirconia — $14,000</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", lineHeight: 1.6, color: "#444" }}>''')
r('<div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>\n            <h2 className="sc-stack-title"', '<div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.97rem", color: "#444", lineHeight: 1.65 }}>\n            <h2 className="sc-stack-title"')

# bullet colour + spacing for lists inside stacking cards
o = '          .sc-stack-card {\n            grid-template-columns: 1fr !important;'
assert s.count(o) == 1
if crlf:
    pass
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
