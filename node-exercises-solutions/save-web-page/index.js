const readline = require('readline');
const fs = require('fs');

// Yes, I named it "http" even though I'm pulling in the `https` module.
const http = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('URL: ', (url) => {
  rl.question('Save to file: ', (filename) => {

    // Done prompting, let's close!
    rl.close();

    // Send a GET request. (Just like jQuery! But no promises...)
    http.get(url, (response) => {
      // We'll get a response object, but not all of the data
      // comes in at once.
      // So, not quite like jQuery.

      // Here's a variable that we'll use to hold all the
      // pieces of data as they come in.
      let pageData = '';

      // This is the "data" event.
      // As with any event, you can associate a callback with it.
      // That callback will receive a piece of the response body.
      response.on('data', (chunk) => {

        // We'll just make note in the console
        // and append the piece to our `pageData` variable.
        console.log('got some data...');
        pageData += chunk;
      });


      // This is the "end" event.
      // This means that the end of the response came,
      // and we're done receiving the data.
      response.on('end', () => {

        // Write the data to a file!
        fs.writeFile(filename, pageData, (err) => {
          if (err) {
            console.log(err.message);
            return;
          }

          console.log(`Saved to file ${filename}`);
        });
      });


    });
  });
});