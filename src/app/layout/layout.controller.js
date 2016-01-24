(function() {
  'use strict';

  angular.module('app.layout')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = [
      '$rootScope',
      '$state',
      'AuthService',
      '$window'
    ];

    function LayoutCtrl(
      $rootScope,
      $state,
      AuthService,
      $window
    ) {
      function exit() {
        AuthService.setLogged(false);

        $state.go('app.auth');
      }

      var vm = this

      vm.exit = exit
    }

})();