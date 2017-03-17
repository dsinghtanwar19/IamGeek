
var myApp = angular.module('myApp',[]);

myApp.controller('menuController',['$scope', '$filter', 'MenuListService', function($scope, $filter, MenuListService){
var menu = this;
var promise = MenuListService.getList();
promise.then(function(response){
  menu.categories = response.data;
})
.catch(function(error){
  console.log("something went wrong");
})
}]);

myApp.service("MenuListService", ['$http', function($http){
var service = this;
service.getList = function(){
var response = $http({
  method : "GET",
  url : ("http://davids-restaurant.herokuapp.com/categories.json")
});
return response;
}


}]);
