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
    '$q',
    'AuthService',
    '$translate'
  ];

  function AuthCtrl(
    $state,
    $scope,
    $timeout,
    COUNT_SUBMIT_RETRIES,
    FORM_FREEZE_DELAY,
    $q,
    AuthService,
    $translate
  ) {
    function submitPin() {
      return $q(function(resolve, reject) {
        if (vm.credentials.pin == 2016)
          return resolve(true);
        else {
          return $translate('PIN_WRONG_ERROR').then(function(PIN_WRONG_ERROR) {
            return reject({
              data: {
                status: 401,
                error: {
                },
                error_reason: PIN_WRONG_ERROR
              }
            })
          })
        }
      }).then(function(result) {
        AuthService.setLogged(true);
        $state.go('app.operations');

        return $q.resolve(result);
      }, function(result) {
        if (--vm.countSubmitRetries == 0)
          $timeout(function() {
            vm.countSubmitRetries = COUNT_SUBMIT_RETRIES;
          }, FORM_FREEZE_DELAY);

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