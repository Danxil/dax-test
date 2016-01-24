(function() {
  'use strict';

  angular.module('app.withdrawal')
      .config(configFn);

  configFn.$inject = ['$stateProvider'];

  function configFn($stateProvider) {
    $stateProvider
        .state('app.withdrawal', {
          url: '/operations/withdrawal',
          controller: 'WithdrawalCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/withdrawal/withdrawal.tpl.html',
          requiredLogged: true
        });
  };

})();