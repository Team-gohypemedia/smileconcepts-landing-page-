const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('Temporary Teeth And Final Teeth');
    console.log('Index:', idx);
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
    let m;
    while ((m = imgRegex.exec(data)) !== null) {
      if (m.index > idx - 10000 && m.index < idx + 20000) {
        console.log('Offset ' + (m.index - idx) + ':', m[1], '| Alt:', m[2]);
      }
    }
  });
});
