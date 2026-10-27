p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:70]
    s = s.replace(o, n)

# 1. CSS: centre instead of spreading
a = s.index('          /* Cards share the tallest card')
b = s.index('        }\n', s.index('gap: 0.85rem;', a)) 
b = s.index('          }\n', b - 40) + len('          }\n') if False else None
start = a
end = s.index('        }', s.index('.sc-stack-text > div:first-child {', a))  # closes the rule block
end = s.index('\n', s.index('}', s.index('gap: 0.85rem;', a))) + 1
s = s[:start] + '''          /* Cards share the tallest card's height. Shorter cards' text is enlarged a little
             (see the fill step in the effect) and any space left over is split above and below */
          .sc-stack-text > div:first-child {
            margin-block: auto;
          }
''' + s[end:]

# 2. Effect: reset + fill step
r('''      container.style.setProperty("--sc-stack-h", "0px");
      const heights = cards.map((card) => card.getBoundingClientRect().height);''', '''      const contentOf = (card: HTMLElement) =>
        card.querySelector<HTMLElement>(".sc-stack-text")?.firstElementChild as HTMLElement | null;
      cards.forEach((card) => {
        const content = contentOf(card);
        if (content) content.style.zoom = "";
      });
      container.style.setProperty("--sc-stack-h", "0px");
      const heights = cards.map((card) => card.getBoundingClientRect().height);''')
r('''      else container.style.setProperty("--sc-stack-h", `${Math.ceil(tallest)}px`);
''', '''      else {
        container.style.setProperty("--sc-stack-h", `${Math.ceil(tallest)}px`);
        // Fill step: enlarge a shorter card's text (up to 20%) as far as it still fits,
        // so the card is filled without changing any of its content.
        cards.forEach((card) => {
          const text = card.querySelector<HTMLElement>(".sc-stack-text");
          const content = contentOf(card);
          if (!text || !content) return;
          const footer = text.lastElementChild as HTMLElement | null;
          const style = getComputedStyle(text);
          const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
          const footerSpace =
            footer && footer !== content
              ? footer.getBoundingClientRect().height + parseFloat(getComputedStyle(footer).marginTop)
              : 0;
          const available = text.getBoundingClientRect().height - padding - footerSpace - 12;
          for (let zoom = 1.2; zoom > 1.001; zoom -= 0.02) {
            content.style.zoom = String(zoom);
            if (content.getBoundingClientRect().height <= available) return;
          }
          content.style.zoom = "";
        });
      }
''')
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
