'use strict';

/**
 * @ngdoc function
 * @name imageshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imageshopApp
 */
angular.module('imageshopApp')
  .controller('MainCtrl', function ($scope, API, $http) {
      $scope.networkError = false;

      $scope.cartItems = 0;
      $scope.findImages = function (query) {
          API.newSearch(query).success(function (data) {
              $scope.networkError = false;
              $scope.searchResults = data.query.allimages;
          }).error(function (data) {
              $scope.networkError = true;
              $scope.searchResults = null;
          });
      }
  });