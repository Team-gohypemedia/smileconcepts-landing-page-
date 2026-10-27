def edit(p, pairs):
    raw = open(p, encoding='utf-8', newline='').read()
    crlf = '\r\n' in raw
    s = raw.replace('\r\n', '\n')
    for o, n in pairs:
        assert s.count(o) == 1, (p, o[:50])
        s = s.replace(o, n)
    if crlf:
        s = s.replace('\n', '\r\n')
    open(p, 'w', encoding='utf-8', newline='').write(s)

edit('src/components/sections/VisualStory.tsx', [('''          text: "COMPLETE MY SMILE",
          href: "#cost",''', '''          text: "COMPLETE MY SMILE",
          href: "tel:0292677777",''')])
edit('src/components/ui/hero-section-2.tsx', [
    ("import { Globe, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';", "import { Globe, Phone, PhoneCall, MapPin, Mail } from 'lucide-react';"),
    ('                <ArrowRight size={16} />', '                <PhoneCall size={16} aria-hidden />'),
])
edit('src/components/sections/AllOn4Overview.tsx', [
    ('''              <a
                href="#cost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.78rem 1.5rem",''', '''              <a
                href="tel:0292677777"
                aria-label="Complete my smile: call 02 9267 7777"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.78rem 1.5rem",'''),
    ('''                <span>Complete my smile</span>
                <ArrowRight size={15} />''', '''                <span>Complete my smile</span>
                <PhoneCall size={15} aria-hidden />'''),
])
