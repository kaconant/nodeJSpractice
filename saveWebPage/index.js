const fs = require('fs');
const readline = require('readline');

const http = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the URL: ', (url) => {
    rl.question('What is the output ', (outputFilename) => {
      rl.close();

      http.get(url, (response) => { // like a click event 
        let outputData = '';
        response.on('data', (data) => {
            outputData += data;
        })
        response.on('end', () => {
            fs.writeFile(outputfilename, outputData, (err) => {
                if (err) {
                    return console.log(err);
                    }   
                    return console.log(`Saved to file ${url}`);
                });
            });
        });
    });
});