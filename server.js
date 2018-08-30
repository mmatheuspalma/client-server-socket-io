
const io = require('socket.io').listen(5001);

io.sockets.on('connection', function (socket) {
    console.log('connected in port 5001');

    socket.on('send-data-to-port-5000', function (data) {
        console.log('data-from-port-5000', data);
    });
});
