'use strict';

angular.module('imageshopApp').controller('PurchaseCtrl', function ($scope, $location, $timeout) {
    $scope.redirectionTimer = 11;

    (function redirectCountdown() {
        $scope.redirectionTimer--;
        if ($scope.redirectionTimer === 0) {
            $location.path('/');
            $scope.$apply();
        } else {
            $timeout(redirectCountdown, 1000);
        }
    })();
});