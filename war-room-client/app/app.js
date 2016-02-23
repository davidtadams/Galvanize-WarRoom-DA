angular.module('warRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      url: '/'
    }).state('serverdetail', {
      templateUrl: 'templates/serverdetail.html',
      controller: 'DetailController',
      url: '/detail'
    }).state('settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController',
      url: '/settings'
    })
  })
