'use strict';

angular.module('imageshopApp').controller('CartCtrl', function ($scope, ShoppingCart) {
    $scope.cartItems = ShoppingCart.getContents();
    $scope.cartItemsCount = ShoppingCart.getSize();

    $scope.toggleItem = function (item) {
        var key = item.title;
        if ($scope.deletedImages.hasOwnProperty(key)) {
            ShoppingCart.addItem(item);
            delete $scope.deletedImages[key];
            $scope.cartItemsCount = ShoppingCart.getSize();
        } else {
            $scope.deletedImages[key] = key;
            ShoppingCart.removeItem(key);
            $scope.cartItemsCount = ShoppingCart.getSize();
        }
    }
});
