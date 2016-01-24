(function() {
  'use strict';

  angular.module('app.operations')
      .controller('OperationsCtrl', OperationsCtrl);

  OperationsCtrl.$inject = [
  ];

  function OperationsCtrl(
  ) {

    var vm = this;

    vm.operations = [
      {
        id: 1,
        name: 'Balance',
        link: 'balance'
      },
      {
        id: 2,
        name: 'Withdrawal',
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
  };
})();