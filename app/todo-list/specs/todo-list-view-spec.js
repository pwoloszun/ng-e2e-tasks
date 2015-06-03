'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('ng-e2e-tasks.todo-list-view'));

  describe('TodoListController controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      var TodoListController = $controller('TodoListController', {$scope: $rootScope.$new()});
      expect(TodoListController).toBeDefined();
    }));

  });
});
