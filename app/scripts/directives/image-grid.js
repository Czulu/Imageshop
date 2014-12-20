'use strict';

angular.module('imageshopApp').directive('imageGrid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            function applyGrid() {
                /*
                Adding small delay to make sure that nodes are rendered before
                stylying is applied
                */
                setTimeout(function () {
                    var options = {
                        minMargin: 20,
                        maxMargin: 20,
                        itemSelector: attrs.imageGrid, //images container selector
                        firstItemClass: "first-item"
                    };
                    jQuery(element).rowGrid(options);
                }, 1000);
            }

            applyGrid();

            scope.$watch(function (scope) {
                return scope.searchResults;
            }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    applyGrid();
                }
            }, true);
        }
    }
});