const fs = require('fs');
const path = require('path');

const dir = 'e:/smileconcepts/public/images/gallery';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let html = '<html><body style="background:#111;color:#fff;font-family:sans-serif;padding:20px;">';
html += '<h1>All Gallery Images</h1>';

for (const f of files) {
  html += `<div style="margin-bottom:30px;border-bottom:1px solid #333;padding-bottom:20px;">
    <h3>${f}</h3>
    <img src="/images/gallery/${f}" style="max-width:500px;border:1px solid #555;display:block;" />
  </div>`;
}

html += '</body></html>';
fs.writeFileSync('e:/smileconcepts/scratch/preview_gallery.html', html);
console.log('Saved scratch/preview_gallery.html with', files.length, 'images');
