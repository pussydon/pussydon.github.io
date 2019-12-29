let express = require('express')
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io').listen(server)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, function() {
    console.log('listening to 3000')
})

users = []
connections = []

io.sockets.on('connection', function(socket) {
    console.log('succesful connection')
    connections.push(socket)

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1)
        console.log('disconnection')
    })

    socket.on('send message', function(data) {
        io.sockets.emit('add message', {msg: data.mess, name: data.name})
    })
})