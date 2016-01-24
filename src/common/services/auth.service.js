(function () {
  'use strict';

  angular
    .module('app.services')
    .service('AuthService', AuthService);

  AuthService.$inject = [];

  function AuthService() {
    var _logged = false;

    this.isLogged = function() {
      return _logged;
    }

    this.setLogged = function(logged) {
      _logged = logged
    }
  }
})();