'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:menuToggle
 * @description
 * # menuToggle
 */
angular.module('hatshopApp')
    .directive('hsMenuToggle', function () {
        return {
            templateUrl: 'views/hs-hs-menu-toggle.html',
            restrict: 'E',
            scope: {
                section: '='
            },
            link: function postLink($scope, $element, $attrs) {
                var controller = $element.parent().controller();
                $scope.isOpen = function() {
                    return controller.isOpen($scope.section);
                };
                $scope.toggle = function() {
                    controller.toggleOpen($scope.section);
                };
            }
        };
    });
