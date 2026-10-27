p = 'src/components/sections/VisualBeforeAfter.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
o = '  category: "allon4" | "fullarch";'
assert s.count(o) == 1
s = s.replace(o, '  category: "allon4" | "fullarch" | "zirconia" | "makeover";')
extra = '''  {
    id: "all-20",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Multi-Unit Precision Crown & Smile Realignment",
    desc: "Replacing aged restorations and misaligned teeth with ultra-durable zirconia crowns designed to last.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/assets/before-after/all-20.1.jpg",
    after: "/assets/before-after/all-20.2.jpg",
  },
  {
    id: "all-3",
    category: "makeover",
    categoryLabel: "Smile Makeover",
    title: "Aesthetic Alignment & Veneer Transformation",
    desc: "Correcting incisal edge wear, uneven margins, and tooth discoloration with handcrafted porcelain veneers.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: 48 Hours",
    before: "/assets/before-after/all-3.1.jpg",
    after: "/assets/before-after/all-3.2.jpg",
  },
  {
    id: "all-4",
    category: "makeover",
    categoryLabel: "Smile Makeover",
    title: "Full Smile Harmony & Gumline Rejuvenation",
    desc: "Restoring symmetry and youthfulness to worn dentition with custom precision cosmetic restorations.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 48 Hours",
    before: "/assets/before-after/all-4.1.jpg",
    after: "/assets/before-after/all-4.2.jpg",
  },
  {
    id: "all-6",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Aesthetic Zirconia Crown & Shade Renewal",
    desc: "Replacing dark discolored dentition with premium translucent zirconia crowns for bright, lifelike translucency.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/assets/before-after/all-6.1.jpg",
    after: "/assets/before-after/all-6.2.jpg",
  },
  {
    id: "all-10",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Full Arch Restoration & Deep Stain Removal",
    desc: "Transforming severe enamel discoloration and heavy wear with biocompatible, high-strength zirconia restorations.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/assets/before-after/all-10.1.jpg",
    after: "/assets/before-after/all-10.2.jpg",
  },
'''
o = '''    before: "/assets/before-after/all-1.1.jpg",
    after: "/assets/before-after/all-1.2.jpg",
  },
'''
assert s.count(o) == 1
s = s.replace(o, o + extra)
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
