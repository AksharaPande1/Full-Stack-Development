(function(angular) {
    'use strict';
    angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
      var friends = [{
          name: 'Abhinay',
          age: 23
        },
        {
          name: 'Rohan',
          age: 20
        },
      ];
      $scope.removeFirst = function() {
        $scope.friends.shift();
      };
      $scope.updateAge = function() {
        $scope.friends.forEach(function(el) {
          el.age = el.age + 3;
        });
      };
      $scope.copy = function() {
        $scope.friends = angular.copy($scope.friends);
      };
      $scope.reset = function() {
        $scope.friends = angular.copy(friends);
      };
      $scope.reset();
    });
  })(window.angular);