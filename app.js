
var myApp = angular.module('myApp',[]);

myApp.controller('shoppingController', function($scope, $filter, shoppingListService1){
  var itemAdder = this;
  itemAdder.itemName ="";
  itemAdder.itemQuantity="";
  itemAdder.addItem = function(){
    shoppingListService1.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
});
myApp.controller('shoppingListController', function($scope, $filter, shoppingListService1){
var showList = this;
showList.items = shoppingListService1.getItems();
});

myApp.service("shoppingListService1", function(){
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
