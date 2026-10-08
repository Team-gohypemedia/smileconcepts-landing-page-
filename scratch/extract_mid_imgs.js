const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');

const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
let m;
const imgs = [];
while ((m = regex.exec(html)) !== null) {
  const src = m[1];
  const alt = m[2];
  const pos = m.index;
  const before = html.substring(Math.max(0, pos - 2000), pos);
  const hMatch = before.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gis);
  const lastHeading = hMatch ? hMatch[hMatch.length - 1].replace(/<[^>]+>/g, '').trim() : 'none';
  imgs.push({ src, alt, lastHeading });
}

console.log(JSON.stringify(imgs.slice(15, 35), null, 2));
