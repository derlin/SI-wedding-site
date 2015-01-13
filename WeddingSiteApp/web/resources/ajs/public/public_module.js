var wedApp = angular.module('wed.public', 
    ['ngRoute',
        'wed.services', 
        'wed.public.controllers', 
        'wed.directives']);


wedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/_partial_test.html',
        controller: 'MainController'
      }).
      when('/gb', {
        templateUrl: 'partials/_golden_book.html',
        controller: 'GbController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
