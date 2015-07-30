'use strict';

/**
 * @ngdoc service
 * @name hatshopApp.Product
 * @description
 * # Product
 * Factory in the hatshopApp.
 */
angular.module('hatshopApp')
  .factory('Product', function ($resource) {
    return $resource('http://localhost:8080/products/', {}, {
      query: {isArray: false}
    });
  });
