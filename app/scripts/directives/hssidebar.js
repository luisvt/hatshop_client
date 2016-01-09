'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:hsSidebar
 * @description
 * # hsSidebar
 */
angular.module('hatshopApp')
  .directive('hsSidebar', function ($location, $timeout, Department, DepartmentCategories) {
    return {
      templateUrl: 'views/hs-sidebar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        function matchRoute() {
          $timeout(function () {
            // Watch for the $location
            scope.$watch(function () {
              return $location.path();
            }, function (newValue) {

              scope.showCategories = /\/departments/.test(newValue);
              var menuItems = $('md-menu-item');
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
        }

        Department.query().$promise.then(function (departments) {
          scope.departments = departments;
          matchRoute();

          $timeout(function () {
            // Watch for the $location
            scope.$watch(function () {
              return $location.path();
            }, function (newValue) {
              var rx = /\/departments\/(\d+)/;
              var arr = rx.exec(newValue);

              if(arr === null) return;

              scope.selDeptId = arr[1];

              DepartmentCategories.query({id: scope.selDeptId}).$promise.then(function (categories) {
                scope.categories = categories;
                matchRoute();
              });
            });
          }, 0);
        });


      }
    };
  });
