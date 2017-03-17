
var myApp = angular.module('myApp',[]);

myApp.controller('ShoppingListController1',['$scope', '$filter', 'ShoppingListFactory', function($scope, $filter, ShoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = ShoppingListFactory();

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

myApp.controller('ShoppingListController2',['$scope', '$filter', 'ShoppingListFactory', function($scope, $filter, ShoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = ShoppingListFactory(3);

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


myApp.service("ShoppingListService",  function(maxItems){
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
}]);

myApp.factory("ShoppingListFactory", function(){
   var factory = function (maxItems){
     return new ShoppingListFactory(maxItems);
   }

   return factory;
})

myApp.directive("listItemDescription", function(){
  var ddo = {
    template : "{{item.quantity}} of {{item.name}}"
  }
})
