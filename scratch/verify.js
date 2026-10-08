const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (c) => (data += c));
  res.on('end', () => {
    console.log('Includes What Are All on 4:', data.includes('What Are All on 4'));
    console.log('Includes id="overview":', data.includes('id="overview"'));
    console.log('Includes id="cost":', data.includes('id="cost"'));
    console.log('Includes id="procedure":', data.includes('id="procedure"'));
    console.log('Includes id="faq":', data.includes('id="faq"'));
    console.log('Includes id="team":', data.includes('id="team"'));
  });
});
