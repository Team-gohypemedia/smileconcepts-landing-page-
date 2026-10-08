const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all headings H2 and any nearby image within 10,000 characters
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gis;
    let h;
    while ((h = h2Regex.exec(data)) !== null) {
      const headingText = h[1].replace(/<[^>]+>/g, '').trim();
      const pos = h.index;
      // look for next image within 6000 chars
      const chunk = data.substring(pos, pos + 8000);
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/i;
      const m = imgRegex.exec(chunk);
      if (m && !m[1].includes('logo') && !m[1].includes('arrow') && !m[1].includes('icon')) {
        console.log(`H2: "${headingText}" -> Img: ${m[1]}`);
      }
    }
  });
});
