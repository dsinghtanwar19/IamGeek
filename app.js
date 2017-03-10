
var myApp = angular.module('myApp',[]);

myApp.controller('parentController', function($scope, $filter, $timeout){
$scope.parentValue=1;
$scope.pc = this;
$scope.pc.parentValue=1;

});
myApp.controller('childController', function($scope, $filter, $timeout){

});
myApp.controller('parentController2', function(){
var parent = this;
parent.value = 1;
});
myApp.controller('childController2', function($scope, $filter, $timeout){
var child = this;
child.value = 5;
console.log("test", $scope);
});
