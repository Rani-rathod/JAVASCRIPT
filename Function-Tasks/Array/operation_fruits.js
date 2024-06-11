
//Define a variable named fruits and assign it an array containing the names of several fruits
//(e.g., "apple", "banana", "cherry", "date").

let fruits = ["apple", "banana", "cherry", "date"];


//Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console 
//(e.g., "Apple", "Banana", "Cherry", "Date"). Rewrite the callback function passed to the foreach function as an arrow function.

fruits.forEach(fruit=>{
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});

//Use the map method to create a new array called reversedFruits that contains each fruit name reversed
// (e.g., "elppa"). Log the reversedFruits array to the console. Rewrite the callback function passed to the
// map function as an arrow function.

// let reversedFruits = fruits.map(function(fruit) {
//     return fruit.split('').reverse().join('');
// });
// console.log(reversedFruits);
let reversedFruits=fruits.map(fruit=>fruit.split('').reverse().join(''));
console.log(reversedFruits);



//Use the filter method to create a new array called longFruits that contains only the fruit names that have 
//more than 5 characters. Log the longFruits array to the console. Rewrite the callback function passed to the
// filter function as an arrow function.

// let longFruits = fruits.filter(function(fruit) {
//     return fruit.length > 5;
// });
// console.log(longFruits);
let longFruitsArrow=fruits.filter(fruit=>fruit.length>5);
console.log(longFruitsArrow);

//Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase.
// Store the result in an array called aFruitsUpper and log it to the console.

let aFruitsUpper = fruits.filter(function(fruit){
    return fruit.includes('a');
}).map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(aFruitsUpper);


//Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit 
//name and update totalCharacters. Log totalCharacters after the loop.
let totalCharacters = 0;
fruits.forEach(function(fruit) {
    totalCharacters+=fruit.length;
});
console.log(totalCharacters);
