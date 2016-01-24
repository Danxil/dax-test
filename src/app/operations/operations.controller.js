(function() {
  'use strict';

  angular.module('app.operations')
      .controller('OperationsCtrl', OperationsCtrl);

  OperationsCtrl.$inject = [
    '$translate',
    'SLICK_RESPONSIVE_SETTING'
  ];

  function OperationsCtrl(
    $translate,
    SLICK_RESPONSIVE_SETTING
  ) {

    var vm = this;

    vm.slickResponsiveSettings = SLICK_RESPONSIVE_SETTING

    $translate([
      'BALANCE',
      'WITHDRAWAL'
    ]).then(function(translate) {
      vm.operations = [
        {
          id: 1,
          name: translate.BALANCE,
          link: 'balance'
        },
        {
          id: 2,
          name: translate.WITHDRAWAL,
          link: 'withdrawal'
        },
        {
          id: 3,
          name: 'Empty 1'
        },
        {
          id: 4,
          name: 'Empty 2'
        },
        {
          id: 5,
          name: 'Empty 3'
        }
      ]
    })
  };
})();