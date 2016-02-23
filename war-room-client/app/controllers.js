angular.module('warRoom')
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController)

HomeController.$inject = ['$scope']
function HomeController($scope) {
  console.log("Hello from Home Controller")
}

DetailController.$inject = ['$scope']
function DetailController($scope) {
  console.log("Hello from Detail Controller")
}

SettingsController.$inject = ['$scope']
function SettingsController($scope) {
  console.log("Hello from Settings Controller")
}
