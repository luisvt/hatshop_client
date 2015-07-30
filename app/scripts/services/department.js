'use strict';

/**
 * @ngdoc service
 * @name hatshopApp.Page
 * @description
 * # Page
 * Factory in the hatshopApp.
 */
angular.module('hatshopApp')
  .factory('Department', function ($resource) {
    return $resource('http://localhost:8080/departments/:id', {}, {
      query: {isArray: false}
    });
  });
