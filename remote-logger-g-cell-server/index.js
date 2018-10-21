var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = 5000;

io.on('connection', function(socket){
    socket.on('message', function(args){
        console.log('message: ', args);
    });
});

http.listen(PORT, function(){
    console.log('listening on *:5000');
});