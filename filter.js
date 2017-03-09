var numberArray = [1,2,3,4,5,6];
console.log(numberArray);

function below5Filter(value){
    return value < 5;

}

var filteredNumberArray = numberArray.filter(below5Filter);

console.log(filteredNumberArray);
