angular.module('warRoom')
  .factory('AllServersService', AllServersService)

function AllServersService() {
  var socket = io()
  var callbacks = []
  socket.on('data', function(data) {
    callbacks.forEach(function (callback) {
      callback(data)
    })
  })
  return {
    on: function(callback) {
      callbacks.push(callback)
    }
  }
}
