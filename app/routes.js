'use strict';

angular.module('ng-e2e-tasks').config([
  "$stateProvider",
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/index.html"
    }).state('todo-list', {
      url: "/todo-list",
      templateUrl: "todo-list/index.html"
    });
  }
]);
