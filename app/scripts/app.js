'use strict';

/**
 * @ngdoc overview
 * @name hatshopApp
 * @description
 * # hatshopApp
 *
 * Main module of the application.
 */
angular.module('hatshopApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'mgcrea.ngStrap',
  'ngMaterial'
]).config(function ($mdIconProvider) {
  $mdIconProvider
      .iconSet('social', 'bower_components/angular-material/demos/icon/demoSvgIconSets/assets/social-icons.svg', 24)
      .defaultIconSet('bower_components/angular-material/demos/icon/demoSvgIconSets/assets/core-icons.svg', 24);
});
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//////        templateUrl: 'views/main.html',
//////        controller: 'MainCtrl'
//      })
////      .when('/about', {
//////        templateUrl: 'views/about.html',
//////        controller: 'AboutCtrl'
////      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
