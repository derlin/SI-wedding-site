var wedApp = angular.module('wed.public', 
    ['ngRoute',
        'wed.services',
        'wed.filters',
        'wed.public.controllers', 
        'wed.directives']);


wedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/gift', {
        templateUrl: 'partials/_gifts.html',
        controller: 'MainController'
      }).
      when('/guestbook', {
        templateUrl: 'partials/_golden_book.html',
        controller: 'GbController'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'partials/welcome.html'
      });
  }]);
