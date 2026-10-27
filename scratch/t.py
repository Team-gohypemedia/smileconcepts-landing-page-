p='src/components/sections/Testimonials.tsx'
raw=open(p,encoding='utf-8',newline='').read()
crlf='\r\n' in raw
s=raw.replace('\r\n','\n')
o='''              color: "#11121E",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            Trusted by Sydney Patients'''
assert s.count(o)==1
s=s.replace(o,o.replace('#11121E','#E86337').replace('Trusted by Sydney Patients','The Trust We Have Earned'))
if crlf: s=s.replace('\n','\r\n')
open(p,'w',encoding='utf-8',newline='').write(s)
