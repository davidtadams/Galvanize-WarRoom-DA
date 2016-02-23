angular.module('warRoom')
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController)

HomeController.$inject = ['$scope', 'AllServersService']
function HomeController($scope, AllServersService) {
  $scope.servers = []
  AllServersService.on(function(data) {
    $scope.servers = data
    $scope.$digest()
  })
}

DetailController.$inject = ['$scope']
function DetailController($scope) {
  console.log("Hello from Detail Controller")
}

SettingsController.$inject = ['$scope']
function SettingsController($scope) {
  console.log("Hello from Settings Controller")
}
