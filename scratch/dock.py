p = 'src/components/layout/MobileSectionBar.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:70]
    s = s.replace(o, n)

r('''  const pillsContainerRef = useRef<HTMLDivElement>(null);
''', '''  const pillsContainerRef = useRef<HTMLDivElement>(null);
  // The dock is shown at the top of the page and while scrolling up, hidden while scrolling down
  const [dockVisible, setDockVisible] = useState(true);
''')

r('''    let frame = 0;
    const handleScroll = () => {
      frame = 0;''', '''    let frame = 0;
    let lastY = window.scrollY;
    const handleScroll = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 80) setDockVisible(true);
      else if (delta < -6) setDockVisible(true);
      else if (delta > 6) setDockVisible(false);
      if (Math.abs(delta) > 6) lastY = y;''')

r('''          maxWidth: "430px",
          zIndex: 9980,
        }}''', '''          maxWidth: "430px",
          zIndex: 9980,
          transform: dockVisible ? "translateY(0)" : "translateY(calc(100% + 24px))",
          opacity: dockVisible ? 1 : 0,
          pointerEvents: dockVisible ? "auto" : "none",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}''')
r('''        .sc-mobile-pills {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }''', '''        .sc-mobile-pills {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-mobile-dock { transition: none !important; }
        }''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
