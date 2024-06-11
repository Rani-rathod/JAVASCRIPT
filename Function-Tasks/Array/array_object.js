//Use the typeof operator to check the type of colors array and console it.
var color=["red", "green", "blue"];
console.log(typeof color);


//Log the length property of the colors array to the console to see the number of elements in the array.
console.log(color.length);


//Use the push method to add another color to the end of the colors array.
color.push("orange");


//Use the pop method to remove the last color from the colors array.
var removedColor = color.pop();
console.log("Removed color:", removedColor);


//Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
var indexOfBlue = color.indexOf("blue");
console.log("Index of 'blue':", indexOfBlue);


//Add a property to the colors array called owner and set its value to your name. Log the colors array to see if the owner property is added.
color.owner = "Rani";
console.log(color);


//Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
for (var key in color) {
  console.log("Property:", key, "Value:", color[key]);
}

