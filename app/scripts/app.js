'use strict';

angular.module('snapcatAdminApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cats', {
        templateUrl: 'views/cats.html',
        controller: 'CatsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
