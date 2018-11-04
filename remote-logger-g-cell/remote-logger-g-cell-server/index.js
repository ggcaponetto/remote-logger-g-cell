/* console wrapper app, aka client */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.RLGC_WS_PORT;

/* ui app, aka decorated console ui */
const ui_app = require('express')();
const ui_http = require('http').Server(ui_app);
const ui_io = require('socket.io')(ui_http);
const ui_PORT = process.env.RLGC_UI_PORT;


/* cors settings */
io.origins('*:*');
ui_io.origins('*:*');

let ui_socket = null;

io.on('connection', function(socket){
    socket.on('event', function(message){
        /* print out the message received from the client */
        console.log('server received event from client:');
        console.log('event: ', message);
        if(ui_socket){
            ui_socket.emit("event", message);
        }
    });
});

ui_io.on('connection', function(socket){
    ui_socket = socket;
});

http.listen(PORT, function(){
    console.log(`socket.io listening on *:${PORT}`);
});

ui_http.listen(ui_PORT, function(){
    console.log(`ui listening on *:${ui_PORT}`);
});