'use strict';

/**
 * @ngdoc function
 * @name hatshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hatshopApp
 */
angular.module('hatshopApp')
    .controller('MainCtrl', function ($scope, $mdSidenav, $location, $http) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.$watch(function () {
            return $location.path();
        }, function (newValue) {
            $http.get($location.path()).success(function (product) {
                $scope.product = product;
            })
        });
    });
