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
          Department.query().$promise.then(function (departments) {
            scope.departments = departments;

            scope.$watch(function () {
              return $location.path();
            }, function (/*String*/ newValue) {
              var rx = /\/departments\/(\d+)/;
              var arr = rx.exec(newValue);

              if (arr === null) {
                delete scope.categories;
                return;
              }

              if(scope.selDeptId === arr[1]) return;

              scope.selDeptId = arr[1];

              DepartmentCategories.query({id: scope.selDeptId}).$promise.then(function (categories) {
                scope.categories = categories;
              });
            });
          });


        }
      };
    });
