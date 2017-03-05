(function() {
    'use strict';

    angular
        .module('calendar')
        .factory('Holiday', ['$resource', 'API_PATH', function($resource, API_PATH) {
            return $resource(API_PATH, {}, {
                all    : {method: 'GET', isArray: false}
            });
        }]);

})();
