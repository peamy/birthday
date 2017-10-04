'use strict';

/**
 * @ngdoc overview
 * @name birthdayApp
 * @description
 * # birthdayApp
 *
 * Main module of the application.
 */
angular
  .module('birthdayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
