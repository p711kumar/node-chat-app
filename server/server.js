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
});

io.on('disconnect', (socket) => {
    console.log('user disconnected');
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log(`node server started at port ${port}`);
});