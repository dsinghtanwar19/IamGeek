
var myApp = angular.module('myApp',[]);


myApp.controller('shoppingController', function($scope, $filter,error, shoppingListService){
var list = this;

 list.items = shoppingListService.getItems();

 list.itemName = "";
 list.itemQuantity = "";
 list.addItem = function(){
   try{
     shoppingListService.addItem(list2.itemName, list2.itemQuantity);
   }
   catch(error){
     list.errorMessage1 = error.message;
   }
 }
 list.removeItem = function(itemIndex){
   shoppingListService.removeItem(itemIndex);
 }
});

function shoppingListService(maxItems){
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

myApp.provider("shoppingListService", function(){
  var provider = this;

  provider.defaults = {
    maxItems: 10
  };

  provider.$get = function () {
    var shoppingList = new shoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
})
