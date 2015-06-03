'use strict';

angular.module('ng-e2e-tasks.dashboard-view', []).controller('DashboardController', [
  "$scope",
  function($scope) {
    $scope.max = 10;

    $scope.calculate = function xxx() {
      var results = [], tmp, i;
      for (i = 0; i < $scope.max; i++) {
        results.push({
          value: i,
          sqrt: Math.sqrt(i),
          pow: Math.pow(i, i),
          log: Math.log(i),
          exp: Math.exp(i),
          sin: Math.sin(i),
          asin: Math.asin(1.0/i)
        });
      }
      $scope.results = results;
    };
  }
]);
