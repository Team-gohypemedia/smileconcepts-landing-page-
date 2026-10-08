const https = require('https');

https.get('https://www.smileconcepts.com.au/all-on-4-dental-implants-sydney.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // find all occurrences of "Temporary Teeth And Final Teeth"
    let pos = 0;
    while ((pos = data.indexOf('Temporary Teeth And Final Teeth', pos)) !== null && pos !== -1) {
      console.log('Occurence at:', pos);
      console.log(data.substring(pos, pos + 1000));
      pos += 30;
    }
  });
});
