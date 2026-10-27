import re
def edit(p, f):
    raw = open(p, encoding='utf-8', newline='').read()
    crlf = '\r\n' in raw
    s = f(raw.replace('\r\n', '\n'))
    if crlf:
        s = s.replace('\n', '\r\n')
    open(p, 'w', encoding='utf-8', newline='').write(s)

def vs(s):
    a = s.index('            <AnimatePresence initial={false}>\n              {isExpanded && (')
    b = s.index('            </AnimatePresence>\n', a) + len('            </AnimatePresence>\n')
    blk = s[a:b]
    inner_start = blk.index('                  <p')
    inner_end = blk.rindex('                </motion.div>')
    paras = blk[inner_start:inner_end]
    new = ('''            {/* Always in the page source; collapsed with CSS until "Read More" is pressed */}
            <div
              inert={!isExpanded}
              style={{
                display: "grid",
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
                opacity: isExpanded ? 1 : 0,
                transition: "grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <div className="flex flex-col gap-3 overflow-hidden pt-1" style={{ minHeight: 0 }}>
''' + paras.replace('\n                  ', '\n                ').replace('                  <p', '                <p', 1) +
'''              </div>
            </div>
''')
    return s[:a] + new + s[b:]

def ov(s):
    a = s.index('              <AnimatePresence>\n                {readMoreIntro && (')
    b = s.index('              </AnimatePresence>\n', a) + len('              </AnimatePresence>\n')
    blk = s[a:b]
    inner_start = blk.index('                    <p')
    inner_end = blk.rindex('                  </motion.div>')
    paras = blk[inner_start:inner_end]
    new = ('''              {/* Always in the page source; collapsed with CSS until "Read more" is pressed */}
              <div
                inert={!readMoreIntro}
                style={{
                  display: "grid",
                  gridTemplateRows: readMoreIntro ? "1fr" : "0fr",
                  opacity: readMoreIntro ? 1 : 0,
                  transition: "grid-template-rows 0.22s ease, opacity 0.22s ease",
                  marginTop: readMoreIntro ? 0 : "-0.85rem",
                }}
              >
                <div style={{ overflow: "hidden", minHeight: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
''' + paras +
'''                </div>
              </div>
''')
    return s[:a] + new + s[b:]

edit('src/components/sections/VisualStory.tsx', vs)
edit('src/components/sections/AllOn4Overview.tsx', ov)
