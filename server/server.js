'use strict';
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.on('disconnect', (socket) => {
        console.log('user disconnected');
    });
    //Send new email to client
    socket.emit('newEmail', {
        'from': 'prashant@example.com',
        'text': "Hey, i am fine, thanks."
    });
    //get new email from client
    socket.on('createEmail', (createEmail) => {
        console.log("Email received from user");
        console.log(createEmail);
    });
    //send new message to client
    socket.emit('newMessage', {
        'from': 'prashant@example.com',
        'text': "Hey, i am fine, thanks.",
        'createdAt': new Date().toString
    });
    //get new message from client
    socket.on('createMessage', (message) => {
        console.log("message received from user");
        console.log(message);
    });
});




app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`node server started at port ${port}`);
});