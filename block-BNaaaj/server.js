// #### http protocol

// Q. In server.js
// 1. require parse method from url core node module.
let { parse } = require('url');
// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.
let parsedURL = parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);
// 3. console query string from parsed url
// 4. console pathname
// 5. console protocol
console.log(parsedURL.query);
console.log(parsedURL.protocol);
console.log(parsedURL.pathname);

// 6. use parse method from url module to parse query string as well.
let queryString = parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit'
).query;
console.log(queryString);
