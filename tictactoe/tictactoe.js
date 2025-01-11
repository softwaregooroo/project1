const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Serve static files (e.g., HTML, CSS, JS)

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle new user joining
  socket.on('join', (username) => {
    socket.username = username;
    io.emit('message', { user: 'Server', text: `${username} has joined the chat.` });
  });

  // Handle chat messages
  socket.on('chat message', (msg) => {
    io.emit('message', { user: socket.username, text: msg });
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    if (socket.username) {
      io.emit('message', { user: 'Server', text: `${socket.username} has left the chat.` });
    }
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});