'use strict';

// initialize Angular App
var ngApp = angular.module('ngApp', [
  'ngResource',
  'ngRoute',
  //'ngAnimate',
  'ui.bootstrap'
  // 'mgcrea.ngStrap'
]);

// making AngularJS work with CSRF protection
ngApp.config(function($httpProvider) {
  var authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

// Routes
ngApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/dashboard', {
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      })
    .otherwise({
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      });
});
