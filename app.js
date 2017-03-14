
var myApp = angular.module('myApp',[]);

myApp.controller('shoppingController', function($scope, $filter, shoppingListService){
  var itemAdder = this;
  itemAdder.itemName ="";
  itemAdder.itemQuantity="";
  itemAdder.addItem = function(){
    shoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
});
myApp.controller('shoppingListController', function($scope, $filter, shoppingListService){
var showList = this;
showList.items = shoppingListService.getItems();
});

myApp.factory("shoppingListService", function(){
  var service = this;
  var items = [];

  service.addItem = function(itemName,quantity){
    var item ={
      name : itemName,
    quantity: quantity
  }
  items.push(item);
  }

  service.removeItem = function(itemIndex){
    items.splice(itemIndex);
  }
  service.getItems= function(){
    return items;
  }
})
