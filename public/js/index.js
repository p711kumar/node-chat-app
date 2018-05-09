'use strict';

let socket = io();
socket.on('connect', function () {
    console.log('connected to server');
    //send email to server
    socket.emit('createEmail', {
        'to': 'prashant@example.com',
        'from': 'kumar@example.com',
        'text': "Hey, How are you doing?"
    });
    //send new message to server
    socket.emit('createMessage', {
        'from': 'prashant@example.com',
        'text': "Hey, i am fine, thanks.",
    });
});
socket.on('disconnect', function () {
    console.log('disconencted from server');
});
//get new email from server
socket.on('newEmail', function (newEmail) {
    console.log("New Email received from server");
    console.log(newEmail);
});
//get new message from server
socket.on('newMessage', function (message) {
    console.log("message received from server");
    console.log(message);
});