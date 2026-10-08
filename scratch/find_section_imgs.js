const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');
const searchPhrases = [
  'Temporary Teeth And Final Teeth',
  'Are All on 4 or All on X Implants Right for You',
  'What are All on 4 dental implants',
  'How Many Implants Will I Need',
  'The Implants We Use',
  'Our All on 4 Technology',
  'Why Choose All on Four Dental Implants'
];
for (const phrase of searchPhrases) {
  const idx = html.indexOf(phrase);
  if (idx !== -1) {
    console.log('=== ' + phrase + ' ===');
    const snippet = html.substring(Math.max(0, idx - 1000), Math.min(html.length, idx + 2500));
    const imgs = snippet.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|png|webp|jpeg)/gi) || [];
    console.log([...new Set(imgs)]);
  }
}
