p = 'src/components/sections/VisualBeforeAfter.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
o = '''              {/* Compare Slider Container */}
              <div
                key={`${activeCase.id}-${inView ? "visible" : "hidden"}`}'''
assert s.count(o) == 1
s = s.replace(o, '''              {/* Details of the other cases stay in the page source (not shown) so every case is readable */}
              {cases
                .filter((c) => c.id !== activeCase.id)
                .map((c) => (
                  <div key={c.id} hidden>
                    <p>{c.categoryLabel}</p>
                    <p>{c.title}</p>
                    <p>{c.desc}</p>
                    <p>{c.location}</p>
                    <p>{c.duration}</p>
                  </div>
                ))}

''' + o)
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
