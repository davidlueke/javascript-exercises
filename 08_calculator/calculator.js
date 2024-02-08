const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let sum = 0
  arr.forEach((el) => sum += el)
  return sum
};

const multiply = function(arr) {
  let prod = 1
  arr.forEach((el) => prod *= el)
  return prod
};

const power = function(num1, num2) {
  return num1 ** num2	
};

const factorial = function(num) {
  
  if ( num === 0){
    return 1

  }else{
    let result = 1
    for (i = 1; i <= num; i++){
      result *= i
    }
    return result
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
