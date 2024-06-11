//Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle (width * height).
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); 

//Call the calculateArea function with width = 5 and height = 10, and log the result to the console.
function calculateArea(width = 5, height = 10) {
    return width * height;
}
console.log(calculateArea()); 

//Modify the calculateArea function to have a default value of 1 for both width and height. 
//This means that if no arguments are provided, the function should return 1.
let calculateAreaFunction = function(width = 1, height = 1) {
    return width * height;
};
console.log(calculateAreaFunction()); 

// Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.
let calculateAreaArrow = (width = 1, height = 1) => width * height;

//Rewrite the calculateArea function as an arrow function.
console.log(calculateAreaArrow()); 
