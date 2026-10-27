p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
o = '          .sc-process-recovery .sc-stack-item:nth-child(n+2) .sc-stack-media { aspect-ratio: 348 / 395; }\n'
assert s.count(o) == 1
s = s.replace(o, '''          .sc-process-recovery .sc-stack-item:nth-child(2) .sc-stack-media { aspect-ratio: 2 / 1; }
          .sc-process-recovery .sc-stack-item:nth-child(3) .sc-stack-media { aspect-ratio: 1 / 1; }
''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
