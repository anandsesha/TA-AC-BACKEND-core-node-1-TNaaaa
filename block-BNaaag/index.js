// require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)
let fs = require('fs');

fs.readFile('./content.md', 'utf-8', (error, content) => {
  console.log(content);
});

// Create a new file and write some content onto it
let newFileContent = `This is the content for a new file`;

fs.writeFile('newFile.md', newFileContent, (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(newFileContent);
  }
});

fs.readFile('./content.md', (err, content) => {
  // handle error or content of the file
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});

// 2. Run sync code from fs module in the above file(`index.js`).
let syncCode = fs.readFileSync('./content.md', 'utf-8');
console.log(`This is syncronous code ->  ${syncCode}`);

// 3. Run async code from fs module in same file.

fs.readFile('./content.md', 'utf-8', (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`This is the content of the readFile -> ${content}`);
  }
});

// 4. create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.
let buff1 = Buffer.alloc(10);
console.log(buff1);

// 5. write content(Welcome to Buffer) to buff1 variable.
buff1.write(`Welcome to Buffer`);
console.log(buff1);
