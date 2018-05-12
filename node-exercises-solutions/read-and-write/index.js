const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input file: ', (input) => {
  rl.question('Output file: ', (output) => {
    rl.close();

    fs.readFile(input, 'utf8', (inputErr, data) => {
      if (inputErr) {
        console.log(inputErr.message);
        return;
      }

      fs.writeFile(output, data.toUpperCase(), (outputErr) => {
        if (outputErr) {
          console.log(outputErr.message);
          return;
        }

        console.log(`Wrote to file: ${output}`);
      });
    });
  });
});