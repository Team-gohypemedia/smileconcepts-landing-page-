p = 'src/components/sections/Testimonials.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:50]
    s = s.replace(o, n)
r('''    <section
      id="testimonials"
      style={{''', '''    <section
      id="testimonials"
      className="sc-rv-section"
      style={{''')
r('''        {/* Bottom CTA Row */}
        <div
          style={{
            marginTop: "3rem",''', '''        {/* Bottom CTA Row */}
        <div
          className="sc-rv-cta-row"
          style={{
            marginTop: "3rem",''')
r('''          .sc-rv-wrap {
            max-height: 440px !important;
          }''', '''          .sc-rv-section {
            padding: 2.5rem 1rem !important;
          }
          .sc-rv-wrap {
            max-height: 330px !important;
          }
          .sc-rv-cta-row {
            margin-top: 1.25rem !important;
            gap: 0.6rem !important;
          }''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
