'use strict';

angular.module('imageshopApp').factory('Cart', function () {
    localStorage.imageShopCart = localStorage.imageShopCart || '{}';

    return {
        getSize: function () {
            var cart = JSON.parse(localStorage.imageShopCart);
            return Object.keys(cart).length;
        },
        addItem: function (item) {
            var cart = JSON.parse(localStorage.imageShopCart),
                key = item.title;

            //check if this image has not been already purchased
            if (cart.hasOwnProperty(key)) {
                return;
            } else {
                cart[key] = item;
                localStorage.imageShopCart = JSON.stringify(cart);
            }
        },
        removeItem: function (id) {
            var cart = JSON.parse(localStorage.imageShopCart),
                key = id.toString();
            delete cart[key];
            localStorage.imageShopCart = JSON.stringify(cart);
        },
        getContents: function () {
            return JSON.parse(localStorage.imageShopCart);
        },
        clear: function () {
            localStorage.imageShopCart = '{}';
        }
    };
});