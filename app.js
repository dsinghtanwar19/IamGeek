
var myApp = angular.module('myApp',[]);

myApp.controller('shoppingController1', function($scope, $filter, shoppingListFactory){
  var list1 = this;
  var shoppingList = shoppingListFactory();
  list1.items=shoppingList.getItems();
  list1.itemName = "";
  list1.itemQuantity = "";
  list1.addItem = function(){
    shoppingList.addItem(list1.itemName,list1.itemQuantity);
  }
  list1.removeItem = function(itemIndex){
    shoppingList.removeItem(itemIndex);
  }
});
myApp.controller('shoppingController2', function($scope, $filter, shoppingListFactory){
var list2 = this;
var shoppingList = shoppingListFactory(3);

 list2.items = shoppingList.getItems();

 list2.itemName = "";
 list2.itemQuantity = "";
 list2.addItem = function(){
   try{
     shoppingList.addItem(list2.itemName, list2.itemQuantity);
   }
   catch(error){
     list2.errorMessage = error.message;
   }
 }
 list2.removeItem = function(itemIndex){
   shoppingList.removeItem(itemIndex);
 }
});

myApp.service("shoppingListService1", function(maxItems){
  var service = this;
  var items = [];

  service.addItem = function (itemName,quantity){
    if((maxItems == undefined) || (maxItems !== undefined) && (items.lenght < maxItems)){
      var item = {
        name : itemName,
        quantity:quantity
      };
      items.push(item);
    }
    else{
      throw new error("Max items (" + maxItems + ") reached.")
    }

  };

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems= function(){
    return items;
  }
})

myApp.factory("shoppingListFactory", function(){
  var factory = function(maxItems){
    return new shoppingListService1(maxItems);
  }
  return factory;
})
