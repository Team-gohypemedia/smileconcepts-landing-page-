p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
o = '''        @media (min-width: 901px) {
          .sc-stack-card {
            min-height: var(--sc-stack-h, min(580px, calc(100vh - 140px))) !important;
          }
        }'''
assert s.count(o) == 1
s = s.replace(o, '''        @media (min-width: 901px) {
          .sc-stack-card {
            min-height: var(--sc-stack-h, min(580px, calc(100vh - 140px))) !important;
          }
          /* Cards share the tallest card's height, so each card's own content is spread
             down the full height (heading at the top, last block at the bottom) instead
             of leaving an empty area under it */
          .sc-stack-text > div:first-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.85rem;
          }
        }''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
