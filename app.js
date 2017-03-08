
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, $filter, $timeout){

$scope.firstName = "Devendra";
$scope.fullName="";

$scope.showWatchers = function(){
  console.log("shaalen is freak", $scope.$$watchersCount);
}

$scope.setFullName = function (){
  $scope.fullName = $scope.firstName + " " + "Singh";
}

$scope.logFirstName = function(){
  console.log("first name is :", $scope.firstName);
}
$scope.logFullName = function(){
  console.log("full name is :", $scope.fullName);
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
