angular.module('imageshopApp').factory('API', function ($http) {
    return {
        'newRequest': function (path, conf) {
            return $http.get('http://en.wikipedia.org/w/api.php' + path, conf);
        },
        'baseURL': 'http://en.wikipedia.org/w/api.php'
    };
})