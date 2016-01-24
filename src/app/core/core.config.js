(function() {
  'use strict';

  angular.module('app.core')
      .config(configFn)
      .run(runFn);

  configFn.$inject = [
    '$locationProvider',
    '$resourceProvider',
    '$httpProvider',
    'toastr',
    'VKI_CONFIG'
  ];

  function configFn($locationProvider,
                    $resourceProvider,
                    $httpProvider,
                    toastr,
                    VKI_CONFIG
  ) {
    VKI_CONFIG.layout.numbers = {
      name: "nubmers",
      keys: [
        [
          ["1", '1'], ["2", "2"], ["3", "3"], ["Bksp", "Bksp"]
        ],
        [
          ["4", "4"], ["5", "5"], ["6", '6'], ["Enter", "Enter"]
        ],
        [
          ["7", "7"], ["8", "8"], ["9", "9"], []],
        [
          [], ["0", "0"], [], []
        ]
      ],
      lang: ["en-EN-num"]
    };

    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    $locationProvider.html5Mode(true);

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $httpProvider.interceptors.push('httpLoadingInterceptor');

    $httpProvider.interceptors.push('errorsInterceptor');
  }

  runFn.$inject = [
    '$rootScope',
    '$state',
    '$stateParams',
    'AuthService'
  ];

  function runFn(
      $rootScope,
      $state,
      $stateParams,
      AuthService
  ) {
    $rootScope.$stateParams = $stateParams
    $rootScope._ = _

    $rootScope.$on('$stateChangeStart', function(
        event,
        toState,
        toParams,
        fromState,
        fromParams
    ) {
      if (toState.requiredLogged && !AuthService.isLogged()) {
        event.preventDefault();
        $state.go('app.auth');
      }
    })
  }

})();
