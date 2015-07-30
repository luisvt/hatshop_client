'use strict';

/**
 * @ngdoc function
 * @name hatshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hatshopApp
 */
angular.module('hatshopApp')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
  });
