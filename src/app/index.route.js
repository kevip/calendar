(function() {
  'use strict';

  angular
    .module('calendar')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as ctrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
