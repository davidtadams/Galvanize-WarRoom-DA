angular.module('warRoom')
  .factory('SocketService', SocketService)

SocketService.$inject = ['$stateParams']
function SocketService($stateParams) {
  var socket = io()
  return {
    on: function(callback) {
      socket.on('data', function(data) {
        if ($stateParams.id) {
          var singleServer = null
          data.forEach(function(server) {
            if ($stateParams.id == server.id) {
              singleServer = server
            }
          })
          callback(singleServer)
        } else {
          callback(data)
        }
      })
    }
  }
}
