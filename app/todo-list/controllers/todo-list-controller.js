'use strict';

angular.module('ng-e2e-tasks.todo-list-view').controller('TodoListController', [
  "$scope",
  "todoList",
  function($scope, todoList) {
    var populateTodos = function() {
      todoList.fetch();
    };

    $scope.todoList = todoList;

    $scope.create = function(title) {
      todoList.create({title: title}, populateTodos);
    };

    $scope.remove = function(todo) {
      todoList.remove(todo, populateTodos);
    };

    populateTodos();
  }
]);
