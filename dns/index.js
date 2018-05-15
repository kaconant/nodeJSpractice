const dns = require('dns');
const readline = require('readline');

// create interface
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const lookup = util.promisify(dns.lookup);

lookup(domain)
.then((address) => {
    console.log(`IP address: ${address}`);
})
.catch((err) => {
return console.log(err)
});

/* OR

rl.question('Provide Website: ', (answer) =>{
   rl.close();

   // do the dns lookup
   dns.lookup(answer, (err, address)=>{
       if(err) {return console.log(err)};
       console.log(address);
   })
})

   */


