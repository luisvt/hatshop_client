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
    return $resource('/departments/:id', {});
  });
