def edit(p, f):
    raw = open(p, encoding='utf-8', newline='').read()
    crlf = '\r\n' in raw
    s = f(raw.replace('\r\n', '\n'))
    if crlf:
        s = s.replace('\n', '\r\n')
    open(p, 'w', encoding='utf-8', newline='').write(s)

def page(s):
    s = s.replace('        <CompleteMySmile />\n', '', 1)
    return s.replace('        <Testimonials />\n', '        <Testimonials />\n        <CompleteMySmile />\n', 1)

def mv(line, after):
    def f(s):
        assert line in s and after in s
        return s.replace(line, '', 1).replace(after, after + line, 1)
    return f

edit('src/app/page.tsx', page)
edit('src/components/layout/SectionStepper.tsx', mv('  { id: "complete-my-smile", label: "Complete My Smile" },\n', '  { id: "testimonials", label: "Patient Reviews" },\n'))
edit('src/components/layout/MobileSectionBar.tsx', mv('  { id: "complete-my-smile", label: "Complete My Smile" },\n', '  { id: "testimonials", label: "Reviews" },\n'))
edit('src/components/layout/Navbar.tsx', mv('  { label: "Why Us", href: "#complete-my-smile", id: "complete-my-smile" },\n', '  { label: "Reviews", href: "#testimonials", id: "testimonials" },\n'))
