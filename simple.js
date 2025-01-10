// Load the http module to create an HTTP server
const http = require('http');

// Create a server that listens for requests and responds with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello, World!\n'); // Send the response
});

// Define the port where the server will listen
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
