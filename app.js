
var myApp = angular.module('myApp',[]);

myApp.controller('ShoppingListController1',['$scope', '$filter', 'shoppingListFactory', function($scope, $filter, shoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = shoppingListFactory();

    list.items = shoppingList.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
    }

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    };
}]);

myApp.controller('ShoppingListController2',['$scope', '$filter', 'shoppingListFactory', function($scope, $filter, shoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = shoppingListFactory(3);

    list.items = shoppingList.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      try {
        shoppingList.addItem(list.itemName, list.itemQuantity);
      } catch (error) {
        list.errorMessage = error.message;
      }

    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    };
}]);


function shoppingListService1(maxItems){
  var service = this;

   // List of shopping items
   var items = [];

   service.addItem = function (itemName, quantity) {
     if ((maxItems === undefined) ||
         (maxItems !== undefined) && (items.length < maxItems)) {
       var item = {
         name: itemName,
         quantity: quantity
       };
       items.push(item);
     }
     else {
       throw new Error("Max items (" + maxItems + ") reached.");
     }
   };

   service.removeItem = function (itemIndex) {
     items.splice(itemIndex, 1);
   };

   service.getItems = function () {
     return items;
   };
}

myApp.factory("shoppingListFactory" function(){
   var factory = function (maxItems){
     return new shoppingListService1(maxItems);
   };

   return factory;
});

myApp.directive("listItemDescription", function(){
  var ddo = {
    template : "{{item.quantity}} of {{item.name}}"
  };
  return ddo;
})
