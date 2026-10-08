const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Fetched ' + data.length + ' bytes');
    const sections = [
      'What are All on 4 dental implants',
      'Are All on 4 or All on X Implants Right for You',
      'Temporary Teeth And Final Teeth',
      'Why Choose All on Four',
      'How Many Implants Will I Need',
      'Understanding All on Four Cost'
    ];
    for (const sec of sections) {
      const idx = data.indexOf(sec);
      if (idx !== -1) {
        console.log('\n--- SECTION: ' + sec + ' ---');
        const chunk = data.substring(idx - 200, idx + 3500);
        const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        let m;
        while ((m = imgRegex.exec(chunk)) !== null) {
          console.log(m[0]);
        }
      }
    }
  });
}).on('error', err => {
  console.error(err);
});
