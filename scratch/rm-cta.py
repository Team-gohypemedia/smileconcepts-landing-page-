p = 'src/components/sections/CompleteMySmile.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
a = s.index('        <div\n          className="sc-cms-actions"')
b = s.index('      </div>\n    </section>')
s = s[:a].rstrip('\n') + '\n' + s[b:]
s = s.replace('import { ArrowRight, Phone } from "lucide-react";\n\n', '', 1)
for o in ['''        .sc-cms-btn {
          transition: transform 0.15s ease;
        }
        .sc-cms-btn:hover {
          transform: translateY(-1px);
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-cms-btn { transition: none; }
          .sc-cms-btn:hover { transform: none; }
        }
''', '''          .sc-cms-actions {
            flex-direction: column !important;
          }
          .sc-cms-btn {
            width: 100%;
            justify-content: center;
          }
''']:
    assert o in s
    s = s.replace(o, '', 1)
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
