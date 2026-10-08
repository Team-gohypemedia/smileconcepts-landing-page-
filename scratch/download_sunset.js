const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://www.smileconcepts.com.au/wp-content/uploads/2019/04/sunset-all-on-4.jpg';
const dest = 'e:/smileconcepts/public/assets/allon4/sunset-all-on-4.jpg';
const file = fs.createWriteStream(dest);
https.get(url, (res) => {
  if (res.statusCode === 200) {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded sunset-all-on-4.jpg successfully:', fs.statSync(dest).size);
    });
  } else {
    console.error('Failed:', res.statusCode);
  }
});
