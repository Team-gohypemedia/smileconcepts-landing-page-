p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
def r(o, n):
    global s
    assert s.count(o) == 1, o[:70]
    s = s.replace(o, n)
# Revision: your document's exact sentences
r("A failed implant, inflammation and bone loss around implants, a broken bridge or an uncomfortable bite.",
  "Problems may involve an implant that has failed, inflammation and bone loss around implants, a broken bridge or an uncomfortable bite.")
r("Previous records, scans and implant brand details, if available.",
  "Bring previous records, scans and implant brand details if available.")
r("Repairing or replacing the bridge, treating disease, removing failed implants or planning further surgery.",
  "Depending on the findings, treatment may involve repairing or replacing the bridge, treating disease, removing failed implants or planning further surgery.")
# Longevity
r("Long-term studies support All on 4 in selected patients, but they also report biological and mechanical complications.",
  "Long-term studies support the use of All on 4 in selected patients, but they also report biological and mechanical complications.")
r("We assess the gums, bone support, bite, bridge and screws.",
  "Regular reviews assess the gums, bone support, bite, bridge and screws.")
r("Cleaning access, smoking, health and bite forces. Ask about",
  "Cleaning access, smoking, health and bite forces all influence ongoing care. Ask about")
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
