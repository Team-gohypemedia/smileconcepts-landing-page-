p = 'src/components/sections/AllOn4ScrollFeatures.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:60]
    s = s.replace(o, n)
r('''          // Short natural scroll steps with snapping; never capture or cancel
          // wheel events, so continuous gestures can always leave the section.
          end: () => `+=${totalTransitions * 120}`,
          pin: stage,
          scrub: 0.18,
          snap: {
            snapTo: 1 / totalTransitions,
            directional: true,
            inertia: false,
            delay: 0.08,
            duration: { min: 0.12, max: 0.2 },
            ease: "power2.out",
          },''', '''          // Each slide gets about three quarters of a screen of scrolling, and the scroll
          // settles on every slide, so each one is shown before the next. Wheel events are
          // never captured or cancelled, so a continuous gesture can still leave the section.
          end: () => `+=${totalTransitions * Math.round(Math.max(420, window.innerHeight * 0.75))}`,
          pin: stage,
          scrub: 0.35,
          snap: {
            snapTo: 1 / totalTransitions,
            directional: true,
            inertia: false,
            delay: 0.12,
            duration: { min: 0.25, max: 0.55 },
            ease: "power2.inOut",
          },''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
