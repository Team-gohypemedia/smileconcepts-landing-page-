const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titles = [
      'What are All on 4 dental implants',
      'Are All on 4 or All on X Implants Right for You',
      'Why Choose All on Four Dental Implants',
      'How Many Implants Will I Need',
      'The Implants We Use',
      'Our All on 4 Technology',
      'Temporary Teeth And Final Teeth',
      'Understanding All on Four Cost',
      'Recovery, Aftercare',
      'All on 4 vs Traditional Dentures'
    ];
    for (const t of titles) {
      const idx = data.indexOf(t);
      if (idx !== -1) {
        console.log('\n=== ' + t + ' (index ' + idx + ') ===');
        const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
        let m;
        while ((m = imgRegex.exec(data)) !== null) {
          if (m.index > idx - 1000 && m.index < idx + 10000) {
            console.log('Offset ' + (m.index - idx) + ':', m[1], '| Alt:', m[2].substring(0, 50));
          }
        }
      }
    }
  });
});
