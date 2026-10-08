const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');

const imgs = [
  'Bridge-1',
  'sunset-car-3',
  'plans-4',
  'results-5',
  'sunset-all-on-4'
];

imgs.forEach(name => {
  const idx = html.indexOf(name);
  if (idx !== -1) {
    console.log('=== ' + name + ' ===');
    console.log(html.substring(Math.max(0, idx - 200), Math.min(html.length, idx + 400)));
  }
});
