const app    = require('express')();
const server = require('http').createServer(app);
const io     = require('socket.io').listen(server);

server.listen(5000);

const clientio  = require('socket.io-client');
const client    = clientio.connect('http://localhost:5001');

io.sockets.on('connection', function (socket) {
    console.log('connected in port 5000');

    setInterval(function() {        
        client.emit('send-data-to-port-5000', { random : Math.random() });
    }, 3000);
});
