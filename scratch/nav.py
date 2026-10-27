p = 'src/components/layout/Navbar.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:50]
    s = s.replace(o, n)
r('''          {/* Primary "Book Online" CTA button */}''', '''          {/* Primary "Complete My Smile" CTA button (goes to the booking section) */}''')
r('''              gap: "0.35rem",
              padding: "0.55rem 1.25rem",''', '''              gap: "0.4rem",
              padding: "0.55rem 1.25rem",''')
r('''          >
            Book Online
          </a>''', '''          >
            <Smile size={15} aria-hidden />
            Complete My Smile
          </a>''')
r('''                  Book a Consultation Online
                </a>''', '''                  Complete My Smile
                </a>''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
