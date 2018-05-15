const save = require('./refactorEx1');

save.saveWebPage('http://someurl.com', 'filename.txt', () => {
    console.log('file saved');
});
