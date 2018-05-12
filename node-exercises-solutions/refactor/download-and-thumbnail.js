const fs = require('fs');
const gm = require('gm');
const request = require('request');

const url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
const filename = 'js-logo.png';
const thumbnailFilename = 'js-logo-small.png';

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, cb) {
  const requestOptions = {
    url: url,
    encoding: null
  };
  request(requestOptions, (err, response, data) => {
    if (err) {
      console.log(err.message);
      return;
    }

    fs.writeFile(filename, data, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, cb);
    });
  });
}

downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
})