var wedApp = angular.module('wed.couple', 
    ['ngRoute',
        'wed.services', 
        'wed.couple.controllers', 
        'wed.directives']);


wedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/_test.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
