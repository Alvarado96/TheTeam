const http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("Hello, Galvanize!");
});
server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);
});