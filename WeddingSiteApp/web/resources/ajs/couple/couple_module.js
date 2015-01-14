var wedApp = angular.module('wed.couple', 
    ['ngRoute',
        'wed.services', 
        'wed.couple.controllers', 
        'wed.directives']);


wedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/manage', {
        templateUrl: 'partials/body.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
