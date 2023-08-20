var http = require('http');
var fs = require('fs');
var url = require('url');

function handleRequest(req, res) {
  //   console.log(req, res);
  /* 
    var userAgent = req.headers['user-agent'];
    res.end(userAgent);
    */
  /*console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/plain');
  res.write(req.url);
  res.write(req.method);
  res.end();
    */
  /*
  res.write(`${req.headers}`);
  res.end();
    */
  /*
  res.statusCode = 202;
  res.end(); //202 Accepted
*/
  /*
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
    */
  /*
  res.writeHead(202, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
*/
  /*
  res.writeHead(202, { 'Content-Type': 'application/json' });
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
*/
  /*
  if (req.method === 'POST' && req.url === '/') {
    console.log(req.method, req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>posted for first time</h2>');
  }
  */
  /*
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Anand');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Anand</h2>');
  } else {
    res.statusCode = 404;
    res.end('Page Not found!');
  }
  */
  /*
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./form.html').pipe(res);
  } else if (req.method === 'POST' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/text');
    res.end(`Posted for a second time`);
  } else {
    res.statusCode = 404;
    res.end('Page Not found!');
  }
  */
  if (req.method === 'GET' && req.url === '/users?email=nodeserver@gmail.com') {
    let parsedUrl = url.parse(req.url);
    console.log(parsedUrl.pathname); //gives only -> /users
    console.log(parsedUrl.query); //gives only -> email=nodeserver@gmail.com
    res.setHeader('Content-Type', 'application/json');
    res.end(`{${parsedUrl.query}}`);
  }
}

let server = http.createServer(handleRequest);
server.listen(2345, () => {
  console.log(`Server listening to port 2345`);
});
