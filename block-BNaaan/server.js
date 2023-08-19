let http = require('http');

function handleResponse(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end('Welcome');
}

let server = http.createServer(handleResponse);

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

/*
We get the header,method and url objects
*/
