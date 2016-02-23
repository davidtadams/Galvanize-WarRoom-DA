var io = require('socket.io')()
var warroom = require('./warroom-client')

io.on('connection', function(socket) {
  warroom(function(error, data) {
    if (error) {
      socket.emit('error', error)
    }
    socket.emit('data', data.data)
  })
})

module.exports = io
