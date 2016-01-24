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
    OPERATIONS: 'Операции',
    BALANCE: 'Баланс',
    WITHDRAWAL: 'Вывод',
    YOUR_BALANCE: 'Ваш баланс',
    BACK: 'Назад',
    AMONT: 'Количество',
    ENTER_AMOUNT: 'Введите количество',
    PATTERN_ERROR_FOR_AMOUNT: 'Это поле должно содержать только числа. Пример: 112.37',
    LANGUAGE: 'Язык'
  };

  angular
    .module('app.core')
    .constant('translateRu', translateEn)
})();