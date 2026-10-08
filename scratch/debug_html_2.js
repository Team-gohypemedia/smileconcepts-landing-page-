const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');
const idx = html.indexOf('What are All on 4 dental implants');
if (idx !== -1) {
  console.log(html.substring(idx + 1500, idx + 4500));
}
