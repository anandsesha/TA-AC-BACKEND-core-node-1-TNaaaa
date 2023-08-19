var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      console.log(content);
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found!');
  }
}

let server = http.createServer(handleRequest);
server.listen(5555, () => {
  console.log(`Server listening to port 5555`);
});
