(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('typingFilter', function () {
      return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {

          modelCtrl.$parsers.push(function(inputValue) {
            var transformedInput = inputValue.match(new RegExp(scope.$eval(attrs.typingFilter), 'g'), '');

            transformedInput = transformedInput ? transformedInput.join('') : '';

            if (transformedInput != inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
            }

            return transformedInput;
          });
        }
      };
    });
})();