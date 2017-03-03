
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope){
$scope.name = "";
$scope.totalValue = 0;
$scope.sayYes = function(){
  return "Hello!";
}
});
