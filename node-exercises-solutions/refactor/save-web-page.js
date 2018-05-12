const request = require('request');
const fs = require('fs');

const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
const filename = 'output.html';

function saveWebPage(url, filename, cb) {
  request.get(url, (err, response, html) => {
    if (err) {
      console.log(err.message);
      return;
    }
    fs.writeFile(filename, html, cb);
  });
}


saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});