
var myApp = angular.module('myApp',[]);


myApp.controller('shoppingController', function($scope, $filter,error, ShoppingListService){
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
});

function ShoppingListService(maxItems){
  var service = this;
  var items = [];

  service.addItem = function (itemName,quantity){
    if((maxItems == undefined) || (maxItems !== undefined) && (items.length < maxItems)){
      var item = {
        name : itemName,
        quantity:quantity
      };
      items.push(item);
    }
    else {
      throw new error("Max items (" + maxItems + ") reached.")
    }

  };

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems= function(){
    return items;
  }
}

myApp.provider("ShoppingListService", function(){
  var provider = this;

  provider.defaults = {
    maxItems: 10
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
})

myApp.config(['ShoppingListServiceProvider', function($ShoppingListServiceProvider){
  ShoppingListServiceProvider.defaults.maxItems = 2;
}]);
