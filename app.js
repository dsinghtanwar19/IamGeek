
var myApp = angular.module('myApp',[])
.component('listItems', {
  templateUrl: "listItems.html",
  controller: ShoppingComponentController,
  bindings :{
    items: '<',
   myTitle: '@title',
   onRemove: '&'
  }
});

/*myApp.directive("listItems", function(){
  var ddo = {

    templateUrl: "listItems.html",
    scope:{
      items : "<",
      title: '@',
      badRemove: "=",
      onRemove: "&"
    },
    controller: ShoppingListDiController,
    controllerAs: 'list',
    bindToController : true,
    link:ShoppingListDirectiveLink,
    transclude : true

  }
  return ddo;
})

function ShoppingListDirectiveLink(scope, element, attrs, controller) {
  console.log("Link scope is: ", scope);
  console.log("Controller instance is: ", controller);
  console.log("Element is: ", element);
  scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
    console.log("Old value: ", oldValue);
    console.log("New value: ", newValue);

    if (newValue === true) {
      displayCookieWarning();
    }
    else {
      removeCookieWarning();
    }

  });

  function displayCookieWarning(){
    var warningElem = element.find("div");
    console.log("test", warningElem);
    warningElem.css('display', 'block');

    var warningElem = element.find("div.error");
    warningElem.slideDown(900);
  }

  function removeCookieWarning(){
    var warningElem = element.find("div");
    warningElem.css('display', 'none');
    var warningElem = element.find("div.error");
    warningElem.slideUp(900);
  }
}*/
ShoppingComponentController.$inject = ['$scope', '$element']
function ShoppingComponentController($scope, $element){
   var $ctrl = this;
   $ctrl.cookiesInList = function () {
   for (var i = 0; i < $ctrl.items.length; i++) {
     var name = $ctrl.items[i].name;
     if (name.toLowerCase().indexOf("cookie") !== -1) {
       return true;
     }
   }

   return false;
 };

 $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };

  $ctrl.$onInit = function () {
    console.log("We are in $onInit()");
  };

  $ctrl.$onChanges = function (changeObj) {
    console.log("Changes: ", changeObj);
  }

  $ctrl.$postLink = function () {
    $scope.$watch('$ctrl.cookiesInList()', function (newValue, oldValue) {
      console.log($element);
      if (newValue === true) {
        // Show warning
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      }
      else {
        // Hide warning
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }
    });
  };
}
myApp.controller('ShoppingListController',['$scope', '$filter', 'shoppingListFactory', function($scope, $filter, shoppingListFactory){
  var list = this;

    // Use factory to create new shopping list service
    var shoppingList = shoppingListFactory();

    list.items = shoppingList.getItems();
    var origTitle = "Shopping List #1";
    list.title = origTitle + "(" + list.items.length + "items)";
     list.warning = "COOKIES DETECTED!";
    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
        list.title = origTitle + "(" + list.items.length + "items)";
    }

    list.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
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
