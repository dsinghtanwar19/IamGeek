
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

menu.logMenuList = function(shortName){
  var promise = MenuListService.logList(shortName);
  promise.then(function(response){
    console.log(response.data);
  });
  .catch(function(error){
    console.log(error);
  })
}
}]);

myApp.service("MenuListService", ['$http', 'ApiBasePath', function($http, ApiBasePath){
var service = this;
service.getList = function(){
var response = $http({
  method : "GET",
  url : ("https://davids-restaurant.herokuapp.com/categories.json")
});
return response;
}

service.logList=function(shortName){
  var response = $http({
    method: "GET",
    url: ("https://davids-restaurant.herokuapp.com/menu_items.json" ),
    params:{
      category:shortName
    }
  });
  return response;
}
}]);
