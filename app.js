
var myApp = angular.module('myApp',[]);

myApp.controller('parentController', function($scope, $filter, $timeout){
$scope.parentValue=1;
$scope.pc = this;
$scope.pc.parentValue=1;

});
myApp.controller('childController', function($scope, $filter, $timeout){
console.log("$scope.parentValue:", $scope.parentValue);
console.log("child $scope : ", $scope);
});
