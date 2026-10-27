import re
p = 'src/components/sections/AllOn4ScrollFeatures.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')

# desktop block
a = s.index('                  {/* Brand CTA Button */}\n')
b = s.index('\n                  </div>\n', a) + len('\n                  </div>\n')
assert 'slide.ctaText' in s[a:b]
s = s[:a].rstrip('\n') + '\n' + s[b:]

# mobile block
a = s.index('            {/* CTA Button matching brand */}\n')
b = s.index('\n            </div>\n', a) + len('\n            </div>\n')
assert 'currentMobileSlide.ctaText' in s[a:b]
s = s[:a].rstrip('\n') + '\n\n' + s[b:].lstrip('\n')

# data
s = re.sub(r'\n    ctaText: "[^"]*",\n    ctaHref: "[^"]*",', '', s)
s = s.replace('\n  ctaText: string;\n  ctaHref: string;', '')
if 'ArrowRight' not in s.replace('import { Check, ArrowRight,', ''):
    s = s.replace('import { Check, ArrowRight,', 'import { Check,', 1)
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
