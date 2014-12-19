'use strict';

angular.module('imageshopApp').factory('API', function ($http) {
    return {
        'newSearch': function (query) {
            return $http.jsonp('http://en.wikipedia.org//w/api.php', {
                params: {
                    'action': 'query',
                    'list': 'allimages',
                    'format': 'json',
                    'aifrom': query.toString(),
                    'aiprop': 'url|mediatype',
                    'ailimit': '500', //max allowed by Wikimedia API
                    'callback': 'JSON_CALLBACK'
                }
            });
        }
    };
});