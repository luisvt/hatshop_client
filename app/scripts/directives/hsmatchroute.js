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
                  var menuItems = element[0].querySelectorAll('md-menu-item');
                  angular.forEach(menuItems, function (menuItem) {
                      var pattern = menuItem.attributes['match-route'].nodeValue;
                      if (scope.strict) {
                          pattern = '^' + pattern + '$';
                      }
                      var regexp = new RegExp(pattern, 'i');

                      if (regexp.test(newValue)) {
                          $(menuItem).addClass('active');
                      } else {
                          $(menuItem).removeClass('active');
                      }
                  });
              });
          }, 1000);

      }
    };
  });
