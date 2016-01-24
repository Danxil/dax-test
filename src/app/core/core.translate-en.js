(function() {
  'use strict';

  var translateEn = {
    TITLE: 'Test app',
    AUTHORIZATION: 'Authorization',
    ENTER_PIN: 'Enter PIN',
    SUBMIT: 'Submit',
    PATTERN_ERROR_FOR_PIN: 'This field must contains only four numbers from 0 to 9',
    REQUIRED_ERROR: 'This is required field',
    PIN_WRONG_ERROR: 'PIN is not correct',
    FREEZE_AUTH_MESSAGE: '3 wrong tries, wait 5 seconds...',
    OPERATIONS: 'Operations',
    BALANCE: 'Balance',
    WITHDRAWAL: 'Withdrawal',
    YOUR_BALANCE: 'Your balance',
    BACK: 'Back',
    AMONT: 'Amount',
    ENTER_AMOUNT: 'Enter amount',
    PATTERN_ERROR_FOR_AMOUNT: 'This field must contain only numbers. Example: 112.37',
    LANGUAGE: 'Language'
  };

  angular
    .module('app.core')
    .constant('translateEn', translateEn)
})();