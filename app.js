
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, $filter){
$scope.name = "Devendra";
/*$scope.totalValue = 0;
$scope.showValue = function(){
  var totalNoValue = calculateValue($scope.name);
  $scope.totalValue = totalNoValue;
}
function calculateValue(string){
  var stringValue = 0;
  for (var i = 0 ; i < string.length; i++){
    stringValue += string.charCodeAt(i);
  }
  return stringValue;
}*/
$scope.upper = function (){
  var upCase = $filter('uppercase');
  $scope.name= upCase($scope.name);
}
 function dictateMe(name, jhohn , dev){
   return "hurray:";
 }
 console.log(dictateMe());

 $scope.sayHello = function(){
   return "fdwfwqhfjkwqefq!";
 }
});
