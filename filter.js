var numberArray = [1,2,3,4,5,6];
console.log(numberArray);

var filteredNumberArray = numberArray.filter(function(value){
  return value < 5;
})

console.log(filteredNumberArray);
