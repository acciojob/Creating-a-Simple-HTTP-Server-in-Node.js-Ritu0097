const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }