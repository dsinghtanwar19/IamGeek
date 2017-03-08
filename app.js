
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, $filter, $timeout){

$scope.firstName = "Devendra";
$scope.fullName="";

$scope.showNumberOfWatchers = function () {
   console.log("# of Watchers: ", $scope.$$watchersCount);
 };

 $scope.setFullName = function () {
   $scope.fullName = $scope.firstName + " " + "Chaikin";
 };

 $scope.logFirstName = function () {
   console.log("First name is: ", $scope.firstName);
 };

 $scope.logFullName = function () {
   console.log("Full name is: ", $scope.fullName);
 };

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
