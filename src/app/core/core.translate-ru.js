(function() {
  'use strict';

  var translateEn = {
    TITLE: 'Тестовое приложение',
    AUTHORIZATION: 'Авторизация',
    ENTER_PIN: 'Введите PIN',
    SUBMIT: 'Отправить',
    PATTERN_ERROR_FOR_PIN: 'Это поле должно содрежать только четыре цифры от 0 до 9',
    REQUIRED_ERROR: 'Это обязательное поле',
    PIN_WRONG_ERROR: 'Неверный PIN',
    FREEZE_AUTH_MESSAGE: 'Вы совершили 3 неверные попытки, подождите 5 секунд...',
  };

  angular
    .module('app.core')
    .constant('translateRu', translateEn)
})();