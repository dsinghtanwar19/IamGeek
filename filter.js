var numberArray = [1,2,3,4,5,6];
console.log(numberArray);

function below5Filter(value){
    return value < 5;

}

var filteredNumberArray = numberArray.filter(below5Filter);

console.log(filteredNumberArray);
var shoppingList = [
 "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("item", shoppingList);

var searchValue = "Bismol";
function containsFilter(value){
  return value.indexOf(searchValue) !== -1;
}

var filterList = shoppingList.filter(containsFilter);
console.log(filterList);
