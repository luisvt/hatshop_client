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
    controller: function ($scope, $location) {
      var pages = $scope.pages = [];

      this.addPage = function (page) {
        pages.push(page);
      };
      
      // Watch for the $location
      $scope.$watch(function () {
        return $location.path();
      }, function (newValue) {
        angular.forEach(pages, function (page) {
          var pattern = page.route;
          if ($scope.strict) {
            pattern = '^' + pattern + '$';
          }
          var regexp = new RegExp(pattern, 'i');

          if (regexp.test(newValue)) {
            page.selected = true;
          } else {
            page.selected = false;
          }
        });
      });
    }
  };
});
