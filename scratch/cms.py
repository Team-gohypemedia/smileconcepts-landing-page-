p = 'src/components/sections/CompleteMySmile.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')

def r(o, n):
    global s
    assert s.count(o) == 1, o[:60]
    s = s.replace(o, n)

# heading smaller
r('''              fontSize: "var(--fs-section-title)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              margin: "0 0 0.6rem",''', '''              fontSize: "clamp(1.4rem, 1.15rem + 1vw, 1.9rem)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              margin: "0 0 0.5rem",''')
r('''              fontSize: "var(--fs-body)",
              color: "#555",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Talk''', '''              fontSize: "0.92rem",
              color: "#555",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Talk''')
r('gap: "1rem",\n          }}\n        >\n          {features', 'gap: "0.85rem",\n          }}\n        >\n          {features')

# card: icon + title on one line, text below
a = s.index('              <span\n                aria-hidden')
b = s.index('            </div>\n          ))}')
card = '''              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span
                  aria-hidden
                  style={{
                    width: "32px",
                    height: "32px",
                    flexShrink: 0,
                    borderRadius: "9px",
                    backgroundColor: "rgba(232, 99, 55, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={17} color="#E86337" />
                </span>
                <h3
                  className="sc-cms-card-title"
                  style={{
                    fontFamily: "var(--font-prata), Georgia, serif",
                    fontSize: "1.02rem",
                    fontWeight: 400,
                    color: "#1C1C1E",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.85rem",
                  color: "#555",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {text}
              </p>
'''
s = s[:a] + card + s[b:]
r('padding: "1.35rem 1.4rem",\n                display: "flex",\n                flexDirection: "column",\n                gap: "0.75rem",', 'padding: "1rem 1.15rem",\n                display: "flex",\n                flexDirection: "column",\n                gap: "0.55rem",')
r('''            padding: 0.95rem 0.85rem !important;
            border-radius: 14px !important;
          }''', '''            padding: 0.8rem 0.75rem !important;
            border-radius: 14px !important;
          }
          .sc-cms-card-title {
            font-size: 0.92rem !important;
          }''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
