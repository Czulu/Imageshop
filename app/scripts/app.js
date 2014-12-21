'use strict';

/**
 * @ngdoc overview
 * @name imageshopApp
 * @description
 * # imageshopApp
 *
 * Main module of the application.
 */
angular
  .module('imageshopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl'
        })
        .when('/cart', {
            templateUrl: 'views/cart/cart.html',
            controller: 'CartCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
