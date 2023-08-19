var http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Welcome');
}

server.listen(4000, () => {
  console.log(`Server listening on prot 4000`);
});
