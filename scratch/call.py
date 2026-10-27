def edit(p, f):
    raw = open(p, encoding='utf-8', newline='').read()
    crlf = '\r\n' in raw
    s = f(raw.replace('\r\n', '\n'))
    if crlf:
        s = s.replace('\n', '\r\n')
    open(p, 'w', encoding='utf-8', newline='').write(s)

def nav(s):
    def r(o, n):
        nonlocal s
        assert s.count(o) == 1, o[:50]
        s = s.replace(o, n)
    r('{/* Primary "Complete My Smile" CTA button (goes to the booking section) */}', '{/* Primary "Complete My Smile" CTA button (calls the clinic) */}')
    r('''            href="#book"
            onClick={(e) => handleSectionClick(e, "#book")}
            className="sc-primary-cta"''', '''            href="tel:0292677777"
            aria-label="Complete My Smile: call 02 9267 7777"
            className="sc-primary-cta"''')
    r('            <Smile size={15} aria-hidden />', '            <PhoneCall size={15} aria-hidden />')
    r('''                  href="#book"
                  onClick={(e) => handleMobileClick(e, "#book")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.8rem",''', '''                  href="tel:0292677777"
                  aria-label="Complete My Smile: call 02 9267 7777"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.8rem",''')
    r('''                  Complete My Smile
                </a>''', '''                  <PhoneCall size={16} aria-hidden />
                  Complete My Smile
                </a>''')
    r('import { Phone, Menu, X, Smile } from "lucide-react";', 'import { Phone, PhoneCall, Menu, X } from "lucide-react";')
    return s

def sf(s):
    o = '''    ctaText: "Complete My Smile",
    ctaHref: "#cost",'''
    assert s.count(o) == 1
    return s.replace(o, '''    ctaText: "Complete My Smile",
    ctaHref: "tel:0292677777",''')

edit('src/components/layout/Navbar.tsx', nav)
edit('src/components/sections/AllOn4ScrollFeatures.tsx', sf)
