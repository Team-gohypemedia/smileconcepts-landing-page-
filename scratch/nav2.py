p = 'src/components/layout/Navbar.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')

# desktop: remove Complete My Smile button
a = s.index('          {/* Primary "Complete My Smile" CTA button (calls the clinic) */}\n')
b = s.index('          </a>\n', a) + len('          </a>\n')
assert 'Complete My Smile' in s[a:b]
s = s[:a].rstrip('\n') + '\n' + s[b:]

# desktop: Book Online becomes the single solid primary CTA again
a = s.index('          {/* "Book Online" button (goes to the booking section) */}')
b = s.index('            Book Online\n          </a>', a)
blk = s[a:b]
blk = blk.replace('className="sc-book-cta"', 'className="sc-primary-cta"')
blk = blk.replace('padding: "0.5rem 1.05rem",', 'padding: "0.55rem 1.25rem",')
import re
blk = re.sub(r'              backgroundColor: isLight[^\n]*\n              color: isLight[^\n]*\n              border: isLight[^\n]*\n',
             '              background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",\n              color: "#ffffff",\n', blk)
blk = blk.replace('              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",', '              boxShadow: "0 4px 14px rgba(244, 122, 74, 0.35)",\n              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",')
s = s[:a] + blk + s[b:]

# mobile menu: remove Complete My Smile, make Book Online solid
a = s.index('                <a\n                  href="tel:0292677777"\n                  aria-label="Complete My Smile: call 02 9267 7777"')
b = s.index('                </a>\n', a) + len('                </a>\n')
assert 'Complete My Smile' in s[a:b]
s = s[:a] + s[b:]
o = '''                    padding: "0.75rem",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#ea6935",
                    textDecoration: "none",
                    border: "1.5px solid #F47A4A",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                  }}'''
assert s.count(o) == 1
s = s.replace(o, '''                    padding: "0.8rem",
                    background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px rgba(244, 122, 74, 0.4)",
                  }}''')

# drop the now-unused outline hover rule and import
a = s.index('        .sc-book-cta:hover {')
b = s.index('        }\n', a) + len('        }\n')
s = s[:a] + s[b:]
s = s.replace('import { Phone, PhoneCall, Menu, X } from "lucide-react";', 'import { Phone, Menu, X } from "lucide-react";')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
