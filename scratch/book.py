p = 'src/components/layout/Navbar.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:60]
    s = s.replace(o, n)

# desktop: Book Online before Complete My Smile
r('''          {/* Primary "Complete My Smile" CTA button (calls the clinic) */}''', '''          {/* "Book Online" button (goes to the booking section) */}
          <a
            href="#book"
            onClick={(e) => handleSectionClick(e, "#book")}
            className="sc-book-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem 1.05rem",
              backgroundColor: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.12)",
              color: isLight ? "#ea6935" : "#ffffff",
              border: isLight ? "1.5px solid #F47A4A" : "1.5px solid rgba(255, 255, 255, 0.7)",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "capitalize",
              textDecoration: "none",
              borderRadius: "7px",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              whiteSpace: "nowrap",
            }}
          >
            Book Online
          </a>

          {/* Primary "Complete My Smile" CTA button (calls the clinic) */}''')

# mobile menu: Book button above Complete My Smile
r('''                <a
                  href="tel:0292677777"
                  aria-label="Complete My Smile: call 02 9267 7777"
                  style={{
                    display: "flex",''', '''                <a
                  href="#book"
                  onClick={(e) => handleMobileClick(e, "#book")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#ea6935",
                    textDecoration: "none",
                    border: "1.5px solid #F47A4A",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Book Online
                </a>
                <a
                  href="tel:0292677777"
                  aria-label="Complete My Smile: call 02 9267 7777"
                  style={{
                    display: "flex",''')
r('''        .sc-primary-cta:hover {''', '''        .sc-book-cta:hover {
          background-color: #FFF1EA !important;
          color: #d85a26 !important;
          transform: translateY(-1px);
        }
        .sc-primary-cta:hover {''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
