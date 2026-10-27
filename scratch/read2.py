p = 'src/components/sections/AllOn4Process.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
i = s.index('      <style>{`', s.index('export default function AllOn4Process'))
j = i + len('      <style>{`\n')
s = s[:j] + '''        .sc-stack-text li {
          margin-bottom: 0.25rem;
        }
        .sc-stack-text li::marker {
          color: #E86337;
        }
''' + s[j:]
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
