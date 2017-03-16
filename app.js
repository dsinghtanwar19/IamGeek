
var myApp = angular.module('myApp',[]).config(Config);

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

myApp.service("ShoppingListService", ['$q','WeightLossFilterService', function($q, WeightLossFilterService){
  var service = this;
  var items = [];
  service.addItem = function(name,quantity){
    var promise = WeightLossFilterService.checkName(name);
    promise.then(function(response){
      var nextPromise = WeightLossFilterService.checkQuantity(quantity);
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

myApp.service("WeightLossFilterService",['$q','$timeout', function($q,$timeout){
  var service = this;
  service.checkName = function(name){
    var defferd = $q.defer();
    var result = {
      message = ""
    }
    $timeout(function(){
      if(name.toLowerCase().indexOf('cookie')== -1){
        deferred.reslove(result);
      }
      else{
        result.message = "Don't use Cookie";
        defferd.reject(result);
      }
    },3000);
    return defferd.promise;
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
