'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('ng-e2e-tasks.dashboard-view'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var view1Ctrl = $controller('Dashboard.ViewCtrl', {$scope: $rootScope.$new()});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
