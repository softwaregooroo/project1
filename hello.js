const http = require('http');

const servers=[];
number=5;
const port = 3000;
for (let i = 0; i < number; i++) {
console.log("hello");

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK) ok
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end(''); // Send the response
});



// Start the server
server.listen(port+i, () => {
  console.log(`Server running at http://localhost:${port+i}/`);
});
 servers.push(server);
}


