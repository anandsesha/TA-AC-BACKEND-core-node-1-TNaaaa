var http = require('http');
var fs = require('fs');
var url = require('url');

function handleRequest(req, res) {
  //   console.log(req, res);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(
      'F:/AltCampus/Node/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/index.html'
    ).pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    fs.createReadStream(
      'F:/AltCampus/Node/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/about.html'
    ).pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // console.log(req.url); -> gives like -> /about
    // We create a about.css there

    // read css file and send it in response
    fs.readFile('./' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/image') {
    // console.log(url.parse(req.url));
    res.setHeader('Content-Type', 'image/jpg');
    fs.createReadStream('./assets/images/img1.jpg').pipe(res);
  } else if (req.method === 'GET' && req.url === '/js') {
    // console.log(url.parse(req.url));
    res.setHeader('Content-Type', 'application/javascript');
    fs.createReadStream('./assets/js/app.js').pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Page Not Found!');
  }
}
var server = http.createServer(handleRequest).listen(3000, () => {
  console.log('Server is listening on port 3000');
});
