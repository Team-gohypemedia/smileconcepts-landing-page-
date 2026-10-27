import re, html, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
raw = open('scratch/src.html', encoding='utf-8', errors='ignore').read()
# visible-in-source text: drop script/style, strip tags, decode entities
body = re.sub(r'<script[\s\S]*?</script>|<style[\s\S]*?</style>', ' ', raw)
body = re.sub(r'<[^>]+>', ' ', body)
body = html.unescape(body)
def norm(t):
    t = t.replace('\u2019', "'").replace('\u2018', "'").replace('\u201c', '"').replace('\u201d', '"')
    t = t.replace('\u2013', '-').replace('\u2014', '-').replace('\u00a0', ' ').replace('\u00ae', '')
    t = re.sub(r'[^a-z0-9$%]+', ' ', t.lower())
    return re.sub(r'\s+', ' ', t).strip()
hay = ' ' + norm(body) + ' '
doc = open('/c/Users/anike/.codex/attachments/d34e11af-1bf2-41e2-a444-8c3820abb711/Pasted text.txt', encoding='utf-8', errors='ignore').read() if False else open(r'C:\Users\anike\.codex\attachments\d34e11af-1bf2-41e2-a444-8c3820abb711\Pasted text.txt', encoding='utf-8', errors='ignore').read()
missing = []
total = 0
for line in doc.split('\n'):
    line = line.strip()
    if len(line) < 25 or line.startswith('http'):
        continue
    line = re.sub(r'\((H[123])\)', '', line)
    line = re.sub(r'\[\d+([,–-]\d+)*\]', '', line)
    # split long lines into sentences and check each
    for sent in re.split(r'(?<=[.?!:])\s+', line):
        n = norm(sent)
        if len(n) < 25:
            continue
        total += 1
        if ' ' + n + ' ' not in hay and n not in hay:
            missing.append(sent.strip())
print('checked', total, 'missing', len(missing))
for m in missing:
    print('-', m[:150])
