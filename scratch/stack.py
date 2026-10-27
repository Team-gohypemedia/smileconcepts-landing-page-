p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:60]
    s = s.replace(o, n)

r('const STACK_MOBILE_DOCK_PX = 84; // just below the mobile navbar',
  'const STACK_MOBILE_DOCK_PX = 84; // just below the mobile navbar\nconst STACK_DESKTOP_DOCK_PX = 95; // just below the desktop navbar')

old_start = s.index('    const computeTops = () => {')
old_end = s.index('    computeTops();\n    const observer')
new = '''    const computeTops = () => {
      const isMobile = window.matchMedia(STACK_MOBILE_QUERY).matches;
      const cards = Array.from(container.querySelectorAll<HTMLElement>(".sc-stack-card"));
      // Measure each card at its natural height, then give every card in the stack the
      // tallest one's height (desktop), so a later card always fully covers the one under it.
      container.style.setProperty("--sc-stack-h", "0px");
      const heights = cards.map((card) => card.getBoundingClientRect().height);
      const tallest = Math.max(0, ...heights);
      if (isMobile || cards.length < 2) container.style.removeProperty("--sc-stack-h");
      else container.style.setProperty("--sc-stack-h", `${Math.ceil(tallest)}px`);

      const dock = isMobile ? STACK_MOBILE_DOCK_PX : STACK_DESKTOP_DOCK_PX;
      const next = heights.map((natural) => {
        const height = isMobile ? natural : Math.max(natural, tallest);
        const top = Math.min(dock, window.innerHeight - height - STACK_BOTTOM_GAP_PX);
        return `${Math.round(top)}px`;
      });
      setStackTops((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
    };

'''
s = s[:old_start] + new + s[old_end:]

# desktop equal-height rule, placed with the other list rules at the top of the style block
r('''        .sc-stack-text li {
          margin-bottom: 0.25rem;
        }''', '''        @media (min-width: 901px) {
          .sc-stack-card {
            min-height: var(--sc-stack-h, min(580px, calc(100vh - 140px))) !important;
          }
        }
        .sc-stack-text li {
          margin-bottom: 0.25rem;
        }''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
