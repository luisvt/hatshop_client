/* global angular */

'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:bsPages
 * @description
 * # bsPages
 */
angular.module('hatshopApp')
.directive('hsPages', function () {
  return {
    templateUrl: 'views/hs-pages.html',
    restrict: 'E',
    transclude: true,
    scope: {
      strict: '=?'
    },
    controller: function ($scope) {
      var pages = $scope.pages = [];

      this.addPage = function (page) {
        pages.push(page);
      };
    }
  };
});
