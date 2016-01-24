(function() {
  'use strict';

  angular
    .module('app.auth')
    .constant('COUNT_SUBMIT_RETRIES', 3)
    .constant('FORM_FREEZE_DELAY', 5000)
})();