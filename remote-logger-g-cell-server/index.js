var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = 5000;

io.on('connection', function(socket){
    socket.on('event', function(args){
        /* print out the message received from the client */
        console.log('event: ', args);
    });
});

http.listen(PORT, function(){
    console.log('listening on *:5000');
});