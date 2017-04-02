import express from 'express';
import socket from 'socket.io';

// Create express server
const app = express();

// If app is running on Herocu or other cloud
const port = process.env.PORT || 8080;

// Initialize socket.io object
const io = socket.listen(app.listen(port));

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

// Message in console
console.log('Your server is running on ' + port);

// Websocket
let users = [];
let usersSearchType = [];
const roomSize = 2;

let globalsocket = io.on('connection', socket => {
  if (socket && socket.client) {
    users.push(socket.client.id);
    emitUsers(globalsocket, users);
  }

  // On disconnect user remove him from room and all users list
  socket.on('disconnect', () => {
    let id = socket.client.id;

    let usersIndex = users.indexOf(id);
    if (usersIndex !== -1) {
      users.splice(users.indexOf(id), 1);
      emitUsers(globalsocket, users);
    }

    let usersSearchIndex = usersSearchType.indexOf(id);
    if (usersSearchIndex !== -1) {
      usersSearchType.splice(usersSearchType.indexOf(id), 1);
      emitRoomUsers(io, usersSearchType);
    }
  });

  socket.on('action', action => {
    switch (action.type) {
      case 'NEW_SEARCH_USER':
        usersSearchType.push(socket.client.id);
        socket.join('searchRoom');
        emitRoomUsers(io, usersSearchType);
        break;

      case 'REMOVE_SEARCH_USER':
        usersSearchType.splice(usersSearchType.indexOf(socket.client.id), 1);
        emitRoomUsers(io, usersSearchType);
        break;

      default:
        break;
    }
  });
});

// Update users list in room
function emitRoomUsers(socket, users) {
  socket.to('searchRoom').emit('action', {
    type: 'SEARCH_ROOM_CHANGED',
    meta: { remote: true },
    payload: users
  });
}

// Update all users list in all connected clients
function emitUsers(socket, users) {
  socket.emit('action', {
    type: 'NEW_USER_CONNECTED',
    meta: { remote: true },
    payload: users
  });
}
