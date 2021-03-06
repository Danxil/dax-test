(function() {
  'use strict';

  angular.module('app.auth')
      .config(configFn);

  configFn.$inject = ['$stateProvider'];

  function configFn($stateProvider) {
    $stateProvider
        .state('app.auth', {
          url: '/',
          controller: 'AuthCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/auth/auth.tpl.html'
        });
  };

})();