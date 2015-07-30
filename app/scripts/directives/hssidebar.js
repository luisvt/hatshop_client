'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:hsSidebar
 * @description
 * # hsSidebar
 */
angular.module('hatshopApp')
  .directive('hsSidebar', function ($location, $timeout, Department) {
    return {
      templateUrl: 'views/hs-sidebar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        Department.query().$promise.then(function (departmentsPage) {
          scope.departmentsPage = departmentsPage;

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
          }, 0);
        });
      }
    };
  });
