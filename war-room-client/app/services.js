angular.module('warRoom')
  .factory('SocketService', SocketService)
  .factory('SettingsService', SettingsService)

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

function SettingsService() {
  return {
    setSettings: function(settings) {
      localStorage.setItem("settings", JSON.stringify(settings))
    },
    getSettings: function() {
      return localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : null
    }
  }
}
