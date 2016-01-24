(function() {
  'use strict';

  angular.module('app.layout')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = [
      '$rootScope',
      '$state',
      'AuthService',
      '$translate'
    ];

    function LayoutCtrl(
      $rootScope,
      $state,
      AuthService,
      $translate
    ) {
      function exit() {
        AuthService.setLogged(false);
        $state.go('app.auth');
      }

      function changeLanguage(language) {
        $translate.use(language)

        $state.go($state.current, {}, {reload: true});
      }

      function getLanguage(language) {
        return $translate.use()
      }

      var vm = this;

      vm.exit = exit;
      vm.isLogged = AuthService.isLogged;
      vm.changeLanguage = changeLanguage;
      vm.getLanguage = getLanguage;
    }

})();