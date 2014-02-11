'use strict';

angular.module('midiApp')
  .controller('MainCtrl', function($scope,$http) {

    $http.get('data/dishes.json').
    success(function(dishes) {
      $scope.dishes = dishes;
      $scope.dish = $scope.dishes[Math.floor(Math.random()*$scope.dishes.length)];
    });

  });