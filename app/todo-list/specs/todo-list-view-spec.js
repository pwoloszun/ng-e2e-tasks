'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('ng-e2e-tasks.todo-list-view'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
