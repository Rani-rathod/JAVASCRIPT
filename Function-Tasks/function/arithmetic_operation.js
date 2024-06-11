// Add: Create a callback function addNumbers that takes two numbers and returns their sum.
function addNumbers(a,b){
    return a+b;
}


//Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product.
function multiplyNumbers(a,b){
    return a*b;
}


//Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the 
//second number from the first.
function subtractNumbers(a,b){
    return a-b;
}


// Divide: Create a callback function that takes two numbers and returns the result of dividing the first number by the second, 
//ensuring to handle division by zero
function divideNumbers(a,b){
    return a/b;
}


//Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation),
// and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
function performArithmetic(num1, num2, operation){
    return operation(num1, num2);
}

console.log(performArithmetic(5,8,addNumbers))
console.log(performArithmetic(6,4,multiplyNumbers))
console.log(performArithmetic(7,9,subtractNumbers))
console.log(performArithmetic(2,3,divideNumbers))
