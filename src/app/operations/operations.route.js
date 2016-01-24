(function() {
  'use strict';

  angular.module('app.operations')
      .config(configFn);

  configFn.$inject = ['$stateProvider'];

  function configFn($stateProvider) {
    $stateProvider
        .state('app.operations', {
          url: '/operations',
          controller: 'OperationsCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/operations/operations.tpl.html',
          requiredLogged: true
        });
  };
})();