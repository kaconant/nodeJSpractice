const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('filename: ', (fname) => {
  // All done with readline. Let's close it up.
  rl.close();

  // fs.readFile(fname, (err, data) => {
  fs.readFile(fname, 'utf8', (err, data) => {

    // if (err) throw err;
    // if (err) {
    //   throw err;
    // };

    if (err) {
      // Print out just the message text.
      console.log(err.message);

      // Always return after handling the error.
      return;
    }

    // If you don't specify an encoding, you have to convert to a string manually.
    // console.log(data.toLocaleString().toUpperCase());
    console.log(data.toUpperCase());

  });
})