let http = require('http');
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.write(`Welcome to homepage`);
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>This is all ABOUT Node.js</h2>');
    res.end();
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.write('{message: this is a post request}');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found!');
  }
}
let server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log(`Server listening on prot 5000`);
});
