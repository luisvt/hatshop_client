'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:hsMatchRoute
 * @description
 * # hsMatchRoute
 */
angular.module('hatshopApp')
    .directive('hsMatchRoute', function ($timeout, $location) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {

          $timeout(function () {
            // Watch for the $location
            scope.$watch(function () {
              return $location.path();
            }, function (newValue) {
              var e = $(element);
              var pattern = e.attr('hs-match-route');
              var regexp = new RegExp(pattern, 'i');
              if (regexp.test(newValue)) {
                e.addClass('active');
              } else {
                e.removeClass('active');
              }
            });
          }, 0);

        }
      };
    });
