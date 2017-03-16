
var myApp = angular.module('myApp',[]);

myApp.controller('shoppingController',['$scope', '$filter', 'ShoppingListService', function($scope, $filter, ShoppingListService){
var list = this;

 list.items = ShoppingListService.getItems();

 list.itemName = "";
 list.itemQuantity = "";
 list.addItem = function(){
   try{
     ShoppingListService.addItem(list.itemName, list.itemQuantity);
   }
   catch(error){
     list.errorMessage = error.message;
   }
 }
 list.removeItem = function(itemIndex){
   ShoppingListService.removeItem(itemIndex);
 }
}]);

myApp.service("ShoppingListService", ['$q','WeightFilterService', function($q, WeightFilterService){
  var service = this;
  var items = [];
  service.addItem = function(name,quantity){
    var promise = WeightFilterService.checkName(name);
    promise.then(function(response){
      var nextPromise = WeightFilterService.checkQuantity(quantity);
      nextPromise.then(function(response){
        var item = {
          name : name,
          quantity:quantity
        };
        items.push(item);
      }, function(errorResponse){
        console.log(errorResponse.message);
      });
    }, function(errorResponse){
      console.log(errorResponse.message);
    });
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}]);

myApp.service("WeightFilterService",['$q','$timeout', function($q,$timeout){
  var service = this;
  service.checkName = function(name){
    var deferred = $q.defer();
    var result = {
      message : ""
    };
    $timeout(function(){
      if(name.toLowerCase().indexOf('cookie')== -1){
        deferred.reslove(result);
      }
      else{
        result.message = "Don't use Cookie";
        deferred.reject(result);
      }
    },3000);
    return deferred.promise;
  };

  service.checkQuantity = function (quantity) {
    var deferred = $q.defer();
    var result = {
      message: ""
    };

    $timeout(function () {
      // Check for too many boxes
      if (quantity < 6) {
        deferred.resolve(result);
      }
      else {
        result.message = "That's too much, Yaakov!";
        deferred.reject(result);
      }
    }, 1000);

    return deferred.promise;
  };
}])
