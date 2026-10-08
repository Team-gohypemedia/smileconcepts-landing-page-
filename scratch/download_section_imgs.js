const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'e:/smileconcepts/public/assets/allon4';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const imagesToDownload = [
  {
    url: 'https://www.smileconcepts.com.au/wp-content/uploads/2024/07/dental-implants-thumbnail.jpg',
    filename: 'dental-implants-model.jpg'
  },
  {
    url: 'https://www.smileconcepts.com.au/wp-content/uploads/2025/07/imgi_30_girl-sitting-in-cafe-checking-out-dental-implants-cost-1-1.jpeg',
    filename: 'candidate-smile.jpg'
  },
  {
    url: 'https://www.smileconcepts.com.au/wp-content/uploads/2024/07/all-on-4.jpg',
    filename: 'temporary-final-teeth-bridge.jpg'
  }
];

imagesToDownload.forEach(({ url, filename }) => {
  const dest = path.join(dir, filename);
  const file = fs.createWriteStream(dest);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename} successfully (${fs.statSync(dest).size} bytes)`);
      });
    } else {
      console.error(`Failed ${filename}: status code ${res.statusCode}`);
    }
  }).on('error', err => {
    console.error(`Error downloading ${filename}:`, err);
  });
});
