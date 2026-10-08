const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');
const idx = html.indexOf('What are All on 4 dental implants');
if (idx !== -1) {
  console.log(html.substring(Math.max(0, idx - 500), idx + 1500));
}
