const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Input file: ', (input) =>{
   rl.question('Output file: ', (output) => {
    rl.close();

    fs.readFile(input, 'utf8', (inputErr, data) => {
        if (inputErr) {
            return console.log(inputErr);
            let outputData = data.toUpperCase();
            fs.writeFile(output, outputData, (outputErr) => {
            if (outputErr) {
               return console.log(outputErr);
            return console.log(`Wrote to file: ${output}`)
            }
        }
    );
};
});
});
});