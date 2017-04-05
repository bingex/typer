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
let room = _generateRoomName();
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
    console.log(`Room ${room} left ${id}.`);

    let usersIndex = users.indexOf(id);
    if (usersIndex !== -1) {
      users.splice(usersIndex, 1);
      emitUsers(globalsocket, users);
    }

    // let usersSearchIndex = usersSearchType.map(u => u.id).indexOf(id);
    // if (usersSearchIndex !== -1) {
    //   usersSearchType.splice(usersSearchIndex, 1);
    //   emitRoomUsers(io, usersSearchType);
    // }
  });

  socket.on('action', action => {
    switch (action.type) {
      case 'NEW_SEARCH_USER':
        // Create new socket room
        socket.join(room);
        console.log(`Room ${room} join ${socket.client.id}.`);

        // Add new socket id to users search
        usersSearchType.push({
          id: socket.client.id,
          room
        });

        // Emit users search to all in room
        emitRoomUsers(io, usersSearchType);

        // Start type if there are equal or more then room size
        if (usersSearchType.length >= roomSize) {
          emitStartType(io, usersSearchType, true);

          // Refresh search users and generate new room name
          usersSearchType = [];
          room = _generateRoomName();
        }

        break;

      default:
        break;
    }
  });
});

// Update users list in room
function emitRoomUsers(socket, users) {
  if (users.length === 0) {
    return false;
  }
  socket.to(users[0].room).emit('action', {
    type: 'SEARCH_ROOM_CHANGED',
    meta: { remote: true },
    payload: users
  });
}

// Start type competition
function emitStartType(socket, users, param) {
  if (users.length === 0) {
    return false;
  }
  socket.to(users[0].room).emit('action', {
    type: 'START_TYPE_FROM_SERVER',
    meta: { remote: true },
    payload: param
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

function _generateRoomName() {
  return 'usersRoom' + new Date().getTime();
}
