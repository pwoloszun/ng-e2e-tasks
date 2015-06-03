'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('ng-e2e-tasks.dashboard-view'));

  describe('view1 controller', function(){
    it('should ....', inject(function($controller, $rootScope) {
      var ctrl = $controller('DashboardController', {$scope: $rootScope.$new()});
      expect(ctrl).toBeDefined();
    }));

  });
});
