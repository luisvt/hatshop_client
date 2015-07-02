'use strict';

describe('Directive: bsPanes', function () {

  // load the directive's module
  beforeEach(module('hatshopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs-panes></bs-panes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bsPanes directive');
  }));
});
