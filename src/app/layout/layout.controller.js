(function() {
  'use strict';

  angular.module('app.layout')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = [
      '$rootScope',
      '$state',
      'AuthService',
    ];

    function LayoutCtrl(
      $rootScope,
      $state,
      AuthService
    ) {
      function exit() {
        AuthService.setLogged(false);
        $state.go('app.auth');
      }

      var vm = this

      vm.exit = exit
      vm.isLogged = AuthService.isLogged
    }

})();