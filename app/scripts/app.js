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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      })
      .when('/checkout', {
        templateUrl: 'checkout/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
