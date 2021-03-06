'use strict';

describe('Directive: hsSidebar', function () {

  // load the directive's module
  beforeEach(module('hatshopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hs-sidebar></hs-sidebar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hsSidebar directive');
  }));
});
