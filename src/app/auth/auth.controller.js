(function() {
  'use strict';

  angular.module('app.auth')
      .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = [
    '$state',
    '$scope',
    '$timeout',
    'COUNT_SUBMIT_RETRIES',
    'FORM_FREEZE_DELAY',
    '$q'
  ];

  function AuthCtrl(
    $state,
    $scope,
    $timeout,
    COUNT_SUBMIT_RETRIES,
    FORM_FREEZE_DELAY,
    $q
  ) {
    function submitPin() {
      return $q(function(resolve, reject) {
        if (vm.credentials.pin == 2016)
          return resolve(true)
        else
          return reject({
            data: {
              status: 401,
              error: {},
              error_reason: 'PIN is not correct'
            }
          })
      }).then(function(result) {


        return $q.resolve(result)
      }, function(result) {
        if (--vm.countSubmitRetries == 0)
          $timeout(function() {
            vm.countSubmitRetries = COUNT_SUBMIT_RETRIES;
          }, FORM_FREEZE_DELAY)

        return $q.reject(result)
      })
    }

    var vm = this;

    vm.credentials = {
      pin: null
    };

    vm.countSubmitRetries = COUNT_SUBMIT_RETRIES;

    vm.submitPin = submitPin;
  };
})();