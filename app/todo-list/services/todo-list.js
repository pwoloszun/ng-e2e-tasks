'use strict';

angular.module('ng-e2e-tasks.todo-list-view').factory('todoList', [
  "$timeout",
  function($timeout) {
    var IN_MEMORY_TODOS = [], LAST_ID;
    for (var i = 0; i < 10; i++) {
      LAST_ID = 100 + i;
      IN_MEMORY_TODOS.push({
        id: LAST_ID,
        title: "todo " + i,
        details: "todo details " + i
      });
    }

    var todoList = {
      fetch: function() {
        if (!this.todos) {
          $timeout(function() {
            todoList.todos = IN_MEMORY_TODOS;
          }, 1000);
        }
      },
      create: function(params, callback) {
        $timeout(function() {
          params.id = ++LAST_ID;
          IN_MEMORY_TODOS.push(params);
          callback();
        }, 600);
      },
      remove: function(todo, callback) {
        var i = IN_MEMORY_TODOS.indexOf(todo);
        if (i > -1) {
          $timeout(function() {
            IN_MEMORY_TODOS.splice(i, 1);
            callback();
          }, 600);
        }
      }
    };

    return todoList;
  }
]);
