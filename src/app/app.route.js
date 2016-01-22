(function() {
  'use strict';

  angular.module('app')
    .config(configFn);

  configFn.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function configFn($stateProvider,
                    $urlRouterProvider
  ) {
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>',
      });

    $urlRouterProvider.otherwise('/');
  }
})();