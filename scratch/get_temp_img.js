const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const chunk = data.substring(608895 - 500, 608895 + 8000);
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
    let m;
    while ((m = imgRegex.exec(chunk)) !== null) {
      console.log('Image:', m[1], '| Alt:', m[2]);
    }
  });
});
