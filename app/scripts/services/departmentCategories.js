'use strict';

/**
 * @ngdoc service
 * @name hatshopApp.Categories
 * @description
 * # Categories
 * Factory in the hatshopApp.
 */
angular.module('hatshopApp')
    .factory('DepartmentCategories', function ($resource) {
        return $resource('/departments/:id/categories');
    });
