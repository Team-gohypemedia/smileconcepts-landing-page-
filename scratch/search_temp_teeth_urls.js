const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('Temporary Teeth And Final Teeth');
    const chunk = data.substring(idx - 500, idx + 10000);
    const matches = chunk.match(/https?:\/\/[^\s"'<>\(\)]+\.(?:jpg|png|webp|jpeg)/gi);
    console.log('Matches near Temporary Teeth:', matches);
  });
});
