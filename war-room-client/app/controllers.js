angular.module('warRoom')
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController)

HomeController.$inject = ['$scope', '$state', 'SocketService']
function HomeController($scope, $state, SocketService) {
  $scope.servers = []
  SocketService.on(function(data) {
    $scope.servers = data
    $scope.$digest()
  })

  $scope.showServer = function(id) {
    $state.go('serverdetail', {id: id})
  }
}

DetailController.$inject = ['$scope', 'SocketService']
function DetailController($scope, SocketService) {
  $scope.server = null
  SocketService.on(function(data) {
    $scope.server = data
    $scope.$digest()
    console.log('server time (ms): ', data.responseTime / 1000);
  })
}

SettingsController.$inject = ['$scope']
function SettingsController($scope) {
  console.log("Hello from Settings Controller")
}
