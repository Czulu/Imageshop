'use strict';

angular.module('imageshopApp')
  .controller('MainCtrl', function ($scope, API, Cart, $rootScope, $modal) {

      /*
      using rootscope to prevent wiping search results by view change
      */
      $rootScope.searchResults = $rootScope.searchResults || {};
      $rootScope.searchResults.data = $rootScope.searchResults.data || null;
      $rootScope.searchResults.currentPage = $rootScope.searchResults.currentPage || 1;

      $scope.networkError = false;
      $scope.cartItemsCount = Cart.getSize();

      $scope.openDetails = function (item) {
          var modalInstance = $modal.open({
              templateUrl: '../views/main/details_modal.html',
              controller: 'ModalInstanceCtrl',
              size: 'lg',
              resolve: {
                  item: function () {
                      return item;
                  }
              }
          });

          modalInstance.result.then(function (item) {
              Cart.addItem(item);
              $scope.cartItemsCount = Cart.getSize();
          });
      };

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
  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, item) {

      $scope.item = item;

      $scope.ok = function () {
          $modalInstance.close(item);
      };

      $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
      };
  });


