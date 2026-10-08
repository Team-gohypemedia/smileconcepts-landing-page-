const fs = require('fs');
const html = fs.readFileSync('e:/smileconcepts/scratch/clean_page.html', 'utf8');
const urls = [];
const regex = /https?:\/\/[^\s"'<>]+?\.(?:jpg|png|webp|jpeg)/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (!urls.includes(m[0])) urls.push(m[0]);
}
console.log(JSON.stringify(urls, null, 2));
