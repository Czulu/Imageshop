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
        .when('/checkout', {
            templateUrl: 'views/checkout/checkout.html',
            controller: 'CheckoutCtrl'
        })
        .when('/purchase', {
            templateUrl: 'views/purchase/purchase.html',
            controller: 'PurchaseCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
