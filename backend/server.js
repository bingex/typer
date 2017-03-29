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