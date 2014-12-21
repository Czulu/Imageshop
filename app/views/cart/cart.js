'use strict';

angular.module('imageshopApp').controller('CartCtrl', function ($scope, Cart, $modal) {
    $scope.cartItems = Cart.getContents();

    $scope.removeItem = function (id, item) {
        var modalInstance = $modal.open({
            templateUrl: '../views/cart/remove_modal.html',
            controller: 'RemoveModalCtrl',
            windowClass: 'verticaly-centered',
            resolve: {
                id: function () {
                    return id;
                }
            }
        });

        modalInstance.result.then(function (id) {
            console.log(id);
        });
    };
})
.controller('RemoveModalCtrl', function ($scope, $modalInstance, id) {

    $scope.id = id;

    $scope.ok = function () {
        $modalInstance.close(id);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
