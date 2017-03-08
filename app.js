
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, $filter, $timeout){

$scope.counter = 0;


 $scope.upCounter = function(){
   setTimeout(function(){
     $scope.$apply(function(){
       $scope.counter++;
       console.log("Counter incremented!");
     });
   }, 1000);

 };


/*$scope.$watch('onceCounter', function(newValue, oldValue){
  console.log("old value:", oldValue);
  console.log("new value:", newValue);
})
$scope.$watch('counter', function(newValue, oldValue){
  console.log("counter old value:", oldValue);
  console.log("counter new value:", newValue);
})*/

});

myApp.filter('lovesFilter', function(){
  return function (input) {
     input = input || "";
     input = input.replace("likes", "loves");
     return input;
   };

})

myApp.filter('truthFilter', function(){
  return function (input,target,replace) {
     input = input || "";
     input = input.replace(target, replace);
     return input;
   };

})
