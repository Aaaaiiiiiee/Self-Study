const port = 3000;
const template = require('./lib/template');

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.send(template.index());
});

io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });

    socket.on('chat message', (msg)=>{
        // console.log('message :' + msg);
        io.emit('chat message', msg);
    });

    // socket.broadcast.emit('hi');
});

http.listen(port, ()=>{
    console.log(`listening on *:${port}`);
});