'use strict';

angular.module('imageshopApp').factory('ShoppingCart', function () {

    localStorage.picturesShopCart = localStorage.picturesShopCart || '{}';

    return {
        getSize: function () {
            var cart = JSON.parse(localStorage.picturesShopCart);
            return Object.keys(cart).length;
        },
        addItem: function (item) {
            var cart = JSON.parse(localStorage.picturesShopCart),
                key = item.title;

            //check if this item has not been already purchased
            if (cart.hasOwnProperty(key)) {
                return;
            } else {
                cart[key] = item;
                localStorage.picturesShopCart = JSON.stringify(cart);
            }
        },
        removeItem: function (id) {
            var cart = JSON.parse(localStorage.picturesShopCart),
                key = id.toString();
            delete cart[key];
            localStorage.picturesShopCart = JSON.stringify(cart);
        },
        getContents: function () {
            return JSON.parse(localStorage.picturesShopCart);
        },
        clear: function () {
            localStorage.picturesShopCart = '{}';
        }
    };
});