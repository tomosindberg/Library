var http = require('http'),
   url = require('url'),
   server = http.createServer();

server.on('request', function(req, res) {
  console.log("true", req.url, true);
  console.log("false", req.url);
  var incomingUrl = url.parse(req.url);  //parses req.url into url format
  console.log(incomingUrl);

  if(incomingUrl.path === '/hello') {
   res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello World');
  }
  else if(incomingUrl.path === '/goodbye'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('goodbye World');
  }
  else{
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end('Resource not found on this server');
  }

  // res.writeHead(200, {'Content-Type':'text/plain'});
  // res.end('hello World');
});

server.listen(3000);

