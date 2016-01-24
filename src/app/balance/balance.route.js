(function() {
  'use strict';

  angular.module('app.balance')
      .config(configFn);

  configFn.$inject = ['$stateProvider'];

  function configFn($stateProvider) {
    $stateProvider
        .state('app.balance', {
          url: '/operations/balance',
          controller: 'BalanceCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/balance/balance.tpl.html',
          //requiredLogged: true
        });
  };

})();