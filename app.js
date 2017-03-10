
var myApp = angular.module('myApp',[]);

myApp.controller('parentController', function($scope, $filter, $timeout){
$scope.parentValue=1;
$scope.pc = this;
$scope.pc.parentValue=1;

});
myApp.controller('childController', function($scope, $filter, $timeout){
console.log("$scope.parentValue:", $scope.parentValue);
console.log("child $scope : ", $scope);
$scope.parentValue = 5;
  console.log("*** CHANGED: $scope.parentValue = 5 ***");
   console.log("$scope.parentValue: ", $scope.parentValue);
   console.log($scope);
   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  $scope.pc.parentValue = 5;
   console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
   console.log("$done: ", $scope);

   console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);

});
