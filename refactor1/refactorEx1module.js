const save = require('./save-web-page');

save.saveWebPage('http://someurl.com', 'filename.txt', () => {
    console.log('file saved');
});
