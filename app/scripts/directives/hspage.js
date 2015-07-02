'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:bsPanes
 * @description
 * # bsPanes
 */
angular.module('hatshopApp').directive('hsPage', function () {
  return {
    require: '^hsPages',
    templateUrl: 'views/hs-page.html',
    restrict: 'E',
    transclude: true,
    scope: {
      route: '@'
    },
    link: function (scope, element, attrs, pagesCtrl) {
      pagesCtrl.addPage(scope);
    }
  };
});
