const http = require('http');

const server = http.createServer((request, response) => {
   request.method === 'GET' 
   response.end("Hello World");
      })
  server.listen(3000, "localhost", () => {
    console.log(`Server running at http://localhost:3000/`);
  });