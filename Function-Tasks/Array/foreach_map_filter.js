
// Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).
let numbers=[1, 2, 3, 4, 5];


// Use the forEach method to iterate over the numbers array and log each number to the console.
numbers.forEach(function(number){
    console.log(number);
});


// Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
numbers.forEach(function(number){
    console.log(number*2);
});


// Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Log the squaredNumbers array to the console.
let squaredNumbers=numbers.map(function(number){
    return number**2;
});
console.log(squaredNumbers);


//Rewrite the callback function passed to the map function as an arrow function.
let square=numbers.map(number=>number*number);
console.log(square);


//Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Log the evenNumbers array to the console.
let evenNumbers=numbers.filter(function(number){
    return number%2===0;
});
console.log(evenNumbers);


//Rewrite the callback function passed to the filter function as an arrow function.
let evenNumbers2=numbers.filter(num=>num%2===0);
console.log(evenNumbers2);
