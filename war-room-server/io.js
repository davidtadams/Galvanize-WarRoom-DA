var io = require('socket.io')()
var warroom = require('./warroom-client')
var db = require('./db/dbconnect')
var api = require('./db/api')

io.on('connection', function(socket) {
  warroom(function(error, data) {
    if (error) {
      socket.emit('error', error)
    } else {
      api.servers.insertServers(db.get(), data.data).then(function(results) {
        api.servers.getAverages(db.get()).then(function(averages) {
          socket.emit('data', formatAverages(data.data, averages))
        })
      }).catch(function(error) {
        console.log(error);
      })
    }
  })
})

function formatAverages(data, averages) {
  data.forEach(function(server) {
    averages.forEach(function(average) {
      if (server.id == average._id) {
        server.averageResponseTime = average.avgResponse
      }
    })
  })
  return data
}

module.exports = io
