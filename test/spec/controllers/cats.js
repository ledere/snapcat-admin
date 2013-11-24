'use strict';

describe('Controller: CatsCtrl', function () {

  // load the controller's module
  beforeEach(module('snapcatAdminApp'));

  var CatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatsCtrl = $controller('CatsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
