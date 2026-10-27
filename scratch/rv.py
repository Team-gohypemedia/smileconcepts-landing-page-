def edit(p, f):
    raw = open(p, encoding='utf-8', newline='').read()
    crlf = '\r\n' in raw
    s = f(raw.replace('\r\n', '\n'))
    if crlf:
        s = s.replace('\n', '\r\n')
    open(p, 'w', encoding='utf-8', newline='').write(s)

def ui(s):
    o = '''                  <div
                    key={`${index}-${i}`}
                    style={{'''
    assert s.count(o) == 1
    s = s.replace(o, '''                  <div
                    key={`${index}-${i}`}
                    className="sc-rv-card"
                    style={{''')
    o = '''                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.91rem",'''
    assert s.count(o) == 1
    s = s.replace(o, '''                    <p
                      className="sc-rv-text"
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.91rem",''')
    return s

def sec(s):
    o = '''        @media (min-width: 640px) {
          .sc-testimonials-title {
            white-space: nowrap !important;
          }
        }
'''
    assert s.count(o) == 1
    s = s.replace(o, o + '''        @media (max-width: 640px) {
          .sc-rv-wrap {
            max-height: 440px !important;
          }
          .sc-rv-card {
            padding: 0.85rem 1rem !important;
            gap: 0.55rem !important;
            border-radius: 14px !important;
            max-width: 100% !important;
          }
          .sc-rv-text {
            font-size: 0.8rem !important;
            line-height: 1.5 !important;
          }
          .sc-rv-card > div:first-child span:first-child {
            font-size: 0.85rem !important;
          }
          .sc-rv-card > div:last-child {
            padding-top: 0.55rem !important;
            gap: 0.55rem !important;
          }
        }
''')
    o = '''        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            maxHeight: "720px",'''
    assert s.count(o) == 1
    s = s.replace(o, '''        <div
          className="sc-rv-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            maxHeight: "720px",''')
    return s

edit('src/components/ui/testimonials-columns-1.tsx', ui)
edit('src/components/sections/Testimonials.tsx', sec)
