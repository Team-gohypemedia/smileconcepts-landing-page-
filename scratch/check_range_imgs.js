const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('What are All on 4 dental implants');
    console.log('Index:', idx);
    if (idx !== -1) {
      // Find all img tags in the entire page
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let m;
      let count = 0;
      while ((m = imgRegex.exec(data)) !== null) {
        if (m.index > idx - 1000 && m.index < idx + 8000) {
          console.log('Nearby img at offset ' + (m.index - idx) + ':', m[0]);
          count++;
        }
      }
      console.log('Found nearby imgs:', count);
    }
  });
});
