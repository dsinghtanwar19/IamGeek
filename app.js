
var myApp = angular.module('myApp',[]);

myApp.directive("listItem", function(){
  var ddo = {

    templateUrl: "listItem.html",
    scope:{
      items : "<",
      title: '@'
    },
    controller: ShoppingListDiController,
    controllerAs: 'list',
    bindToController : true

  }
  return ddo;
})

myApp.controller('ShoppingListDiController',['$scope', function($scope){
   var list = this;
   list.cookiesInList = function () {
   for (var i = 0; i < list.items.length; i++) {
     var name = list.items[i].name;
     if (name.toLowerCase().indexOf("cookie") !== -1) {
       return true;
     }
   }

   return false;
 };
}])


myApp.controller('ShoppingListController',['$scope', '$filter', 'shoppingListFactory', function($scope, $filter, shoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = shoppingListFactory();

    list.items = shoppingList.getItems();
    var origTitle = "Shopping List #1";
    list.title = origTitle + "(" + list.items.length + "items)";
    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
        list.title = origTitle + "(" + list.items.length + "items)";
    }

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
        list.title = origTitle + "(" + list.items.length + "items)";
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

myApp.factory("shoppingListFactory", function(){
   var factory = function (maxItems){
     return new shoppingListService1(maxItems);
   };

   return factory;
});
