/* global UNKNOWN */

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
      controller: function ($scope, Product) {
        $scope.productsPage = Product.query();

        var slides = $scope.slides = [];
        $scope.addSlide = function () {
          var newWidth = 600 + slides.length + 1;
          slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
          });
        };
        for (var i = 0; i < 4; i++) {
          $scope.addSlide();
        }
      }
    };
  });
