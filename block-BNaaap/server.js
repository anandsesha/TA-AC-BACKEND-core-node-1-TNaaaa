let http = require('http');

function handleRequest(req, res) {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1><i>Welcome</i></h1>');
  res.end();
}

let server = http.createServer(handleRequest);

server.listen(4444, 'localhost', () => {
  console.log(`Server listening at port no 4444`);
});
