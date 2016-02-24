angular.module('warRoom')
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController)

HomeController.$inject = ['$scope', '$state', 'SocketService', 'SettingsService']
function HomeController($scope, $state, SocketService, SettingsService) {
  if (SettingsService.getSettings() === null) {
    SettingsService.setSettings({
      warning: 50,
      critical: 500
    })
  }
  $scope.settings = SettingsService.getSettings()
  $scope.servers = []
  SocketService.on(function(data) {
    $scope.servers = data
    $scope.$digest()
  })

  $scope.showServer = function(id) {
    $state.go('serverdetail', {id: id})
  }
}

DetailController.$inject = ['$scope', 'SocketService', 'SettingsService']
function DetailController($scope, SocketService, SettingsService) {
  $scope.settings = SettingsService.getSettings()
  $scope.server = null
  SocketService.on(function(data) {
    $scope.server = data
    $scope.$digest()
  })
}

SettingsController.$inject = ['$scope', '$state', 'SettingsService']
function SettingsController($scope, $state, SettingsService) {
  $scope.settings = SettingsService.getSettings()

  $scope.editSettings = function(newSettings) {
    SettingsService.setSettings($scope.settings)
    $state.go('home')
  }
}
