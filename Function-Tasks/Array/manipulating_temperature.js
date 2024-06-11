
// Define a variable named temperatures and assign it an array containing several temperature readings in 
//Celsius (e.g., -3, 14, 22, 5, -10).
let temperatures = [-3, 14, 22, 5, -10];


// Use the forEach method to iterate over the temperatures array and log each temperature to the console. 
//Rewrite the callback function passed to the foreach function as an arrow function.
temperatures.forEach(function(temperature) {
    console.log(temperature);
});



//Use the forEach method to iterate over the temperatures array and convert each temperature to
// Fahrenheit using the formula (temperature * 9/5) + 32. Log each converted temperature to the console.
//Rewrite the callback function passed to the foreach function as an arrow function.
temperatures.forEach(function(temperature){
    var fahrenheit=(temperature*9/5)+32;
    console.log(fahrenheit);
});


//Use the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit
// equivalent of each temperature in the temperatures array. Log the temperaturesInFahrenheit array to the 
//console. Rewrite the callback function passed to the map function as an arrow function.
function convertToFahrenheit(temperatures){
    return temperatures.map(temperature => (temperature*9/5)+32);
}
console.log(convertToFahrenheit(temperatures))


//Use the filter method to create a new array called belowFreezing that contains only the temperatures 
//from the temperatures array that are below 0°C. Log the belowFreezing array to the console. Rewrite the 
//callback function passed to the filter function as an arrow function.
var belowFreezing=temperatures.filter(function(temperature){
    return temperature<0;
});
console.log(belowFreezing);




