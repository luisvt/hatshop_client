'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:hsMenuLink
 * @description
 * # hsMenuLink
 */
angular.module('hatshopApp')
    .directive('hsMenuLink', function () {
        return {
            templateUrl: 'views/hs-menu-link.html',
            restrict: 'E',
            scope: {
                section: '='
            },
            link: function postLink($scope, $element, attrs) {
                var controller = $element.parent().controller();

                $scope.focusSection = function () {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    });
