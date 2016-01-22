(function() {
  'use strict';

  angular.module('app.layout')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = [
      '$rootScope',
      '$state',
      '$window'
    ];

    function LayoutCtrl(
      $rootScope,
      $state,
      $window
    ) {
      function activate() {
      }


      var vm = this;

      activate();
    }

})();