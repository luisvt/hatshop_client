'use strict';

describe('Directive: hsProductList', function () {

  // load the directive's module
  beforeEach(module('hatshopApp'));
  beforeEach(module('views/hs-product-list.html'));

  var element,
    scope,
    $httpBackend;

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('products')
      .respond({});
    
    scope = $rootScope.$new();
//    scope.gretting = 'Hello';
//    element = angular.element('<product-list></product-list>');
//    element = $compile(element)(scope);
//    scope.$digest();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hs-product-list></hs-product-list>');
    element = $compile(element)(scope);
//    scope.gretting = 'Hello';
    scope.$digest();
//    expect(element.text()).toBe('Hello world!');
  }));
});
