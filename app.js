
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, $filter){
$scope.onceCounter = 0;

 $scope.showNumberOfWatchers = function () {
   console.log("dev",$scope.$$watchersCount);
 };
 $scope.countOnce = function(){
   $scope.onceCounter = 1;
 }


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
