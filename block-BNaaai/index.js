/*
1. Use **URL** module to parse url informaton.

```js
// create file index.js
var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
```
- console parsedUrl.pathname
- console parsedUrl.query
- console.log parsed Url host and protocol
*/
const { METHODS } = require('http');
var url = require('url');
const parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
  true
);
console.log(parsedUrl);
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'blog.altcampus.io:80',
  port: '80',
  hostname: 'blog.altcampus.io',
  hash: null,
  search: '?name=altcampus&gender=male',
  query: [Object: null prototype] { name: 'altcampus', gender: 'male' },
  pathname: '/students/register',
  path: '/students/register?name=altcampus&gender=male',
  href: 'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male'
}
*/
// - console parsedUrl.pathname
console.log(parsedUrl.pathname);
// - console parsedUrl.query
console.log(parsedUrl.query);
// - console.log parsed Url host and protocol
console.log(parsedUrl.host, parsedUrl.protocol);

/* 2. Do a request on google.com and view headers inside developer's network
  tab by clicking on a specific request.*/

var parsedGoogleUrl = url.parse('https://www.google.com/', true);
// console.log(parsedGoogleUrl);

/*
click on search button (some search options pop up from your recent searches) 
-> On viewing network tab -> 
1. General
   Request URL: `` //this is the image which poped up on the search options
    Request METHOD: GET 
    Status Code: 200 OK
    Refer policy: Origin

2.Response Headers
    Content-Type: image/jpeg
    
3. Request Headers
    Referer: https://google.com
    User-Agent: your browser chrome/morzilla etc.
*/
