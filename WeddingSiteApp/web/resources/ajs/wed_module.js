var wedApp = angular.module('wed', 
    ['ngRoute',
        'wed.services', 
        'wed.controllers', 
        'wed.directives']);


wedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/_partial_test.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
