// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?
let { readFile, unlink, readFileSync } = require('fs');

readFile('./index.js', (err, content) => {
  console.log(`Welcome to Nodejs`);
});

// Q. In above `index.js` file
// - require os module
// - write code to get `number of cpu's, free memory, uptime and version from os module`
// - write code to require only readFile and unlink method from fs module.
let os = require('os');
console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
// - write code to convert buffer back to string.
let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);
console.log(buff1);
console.log(buff2);

buff1.write(`Welcome to Nodejs`);
buff2.write(`Welcome to Nodejs`);

console.log(buff1.toString());
console.log(buff2.toString());

// Q. Write code example to demonstrate blocking and non-blocking code.
// Blocking - Syncronous example:
console.log('first');
for (let i = 0; i < 1000; i++) {
  //   console.log('Second');
}
console.log('last');

// non-blocking - asyncronous example:
console.log('first');
for (let i = 0; i < 1000; i++) {
  //   console.log('Second');
}
readFile('./index.js', (err, content) => {
  console.log(`Part of Async function`);
});
console.log('last');

// OR
let sync = readFileSync('./app.js');
let async = readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});
