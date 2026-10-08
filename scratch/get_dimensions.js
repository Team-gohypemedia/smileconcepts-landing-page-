const fs = require('fs');

function getJpegDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

['dental-implants-model.jpg', 'candidate-smile.jpg', 'temporary-final-teeth-bridge.jpg', 'sunset-all-on-4.jpg'].forEach(f => {
  console.log(f, getJpegDimensions('e:/smileconcepts/public/assets/allon4/' + f));
});
