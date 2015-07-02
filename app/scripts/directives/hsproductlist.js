'use strict';

/**
 * @ngdoc directive
 * @name hatshopApp.directive:productList
 * @description
 * # productList
 */
angular.module('hatshopApp')
  .directive('hsProductList', function () {
    return {
      templateUrl: 'views/hs-product-list.html',
      restrict: 'E',
//      link: function (scope, element, attrs) {
//        element.text('this is the productList directive');
//      },
      controller: function ($scope) {
        $scope.gretting = 'Hello';
      }
    };
  });
