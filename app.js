
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope){
$scope.name = "Devendra";
$scope.sayYes = function(){
  return "Hello!";
}
});
