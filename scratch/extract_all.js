const fs = require('fs');
const html = fs.readFileSync('scratch/clean_page.html', 'utf8');

const sections = [
  'All on 4 Dental Implants in Sydney',
  'What are All on 4 dental implants (full arch) ?',
  'All on 4 vs All on X: What Do These Names Mean?',
  'Are All on 4 or All on X Implants Right for You?',
  'Why Choose All on Four Dental Implants in Sydney',
  'How Many Implants Will I Need: All on 4, All on 5, All on 6?',
  'The Implants We Use',
  'Our All on 4 Technology',
  'Meet Your Full Arch Implant Dentists',
  'Temporary Teeth And Final Teeth: What To Expect',
  'Our 5-Step All on 4 and All on X Process',
  'Recovery, Aftercare',
  'All on 4 vs Traditional Dentures: How Do They Compare?',
  'Understanding All on Four Cost in Sydney',
  'What If You Have Bone Loss?',
  'What You Should Know About Risks',
  'Why Patients Choose Smile Concepts',
  'Frequently Asked Questions',
  'Important Information About Your Treatment'
];

let md = '# Full Extracted Content from Live Page\n\n';

for (let i = 0; i < sections.length; i++) {
  const current = sections[i];
  const next = sections[i + 1];
  const p1 = html.indexOf(current);
  if (p1 === -1) {
    md += '## ' + current + '\n[NOT FOUND]\n\n';
    continue;
  }
  const p2 = next ? html.indexOf(next, p1 + current.length) : html.length;
  const raw = html.slice(p1, p2 !== -1 ? p2 : p1 + 8000);
  const clean = raw.replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#038;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  md += '## ' + current + '\n\n' + clean + '\n\n---\n\n';
}

fs.writeFileSync('scratch/full_extracted_content.md', md);
console.log('Saved full extracted content to scratch/full_extracted_content.md, length:', md.length);
