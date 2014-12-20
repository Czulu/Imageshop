'use strict';

angular.module('imageshopApp')
  .controller('MainCtrl', function ($scope, API, $rootScope) {

      /*
      using rootscope to prevent wiping search results by view change
      */
      $rootScope.searchResults = $rootScope.searchResults || {};
      $rootScope.searchResults.data = $rootScope.searchResults.data || null;
      $rootScope.searchResults.currentPage = $rootScope.searchResults.currentPage || 1;
      $scope.networkError = false;
      $scope.cartItems = 0;

      $scope.findImages = function (query) {
          API.newSearch(query).success(function (data) {
              var results = [],
                  leng = data.query.allimages.length;

              $scope.networkError = false;
              /*
              filtering videos from data returned by API
              */
              for (var i = 0; i < leng; i++) {
                  if (data.query.allimages[i].mediatype === 'BITMAP') {
                      results.push(data.query.allimages[i]);
                  }
              }
              $scope.searchResults.data = results;
              $scope.searchResults.currentPage = 1;
          }).error(function (data) {
              $scope.networkError = true;
          });
      }
  });
