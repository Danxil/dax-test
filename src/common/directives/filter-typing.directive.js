(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('typingFilter', function () {
      return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {

          modelCtrl.$parsers.push(function(inputValue) {
            var isFinite = attrs.type == 'number'

            if (inputValue == null) return null

            var inputValueStr = inputValue + '';

            var transformedInput = inputValueStr.match(new RegExp(scope.$eval(attrs.typingFilter), 'g'), '');

            transformedInput = transformedInput ? transformedInput.join('') : '';

            if (isFinite) transformedInput = parseFloat(transformedInput)

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