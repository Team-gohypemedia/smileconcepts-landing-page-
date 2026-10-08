const fs = require('fs');
const path = require('path');

const files = [
  'dental-implants-model.jpg',
  'candidate-smile.jpg',
  'temporary-final-teeth-bridge.jpg',
  'sunset-all-on-4.jpg'
];

files.forEach(f => {
  const p = path.join('e:/smileconcepts/public/assets/allon4', f);
  console.log(f, fs.statSync(p).size, 'bytes');
});
