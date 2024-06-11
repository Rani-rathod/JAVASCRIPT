//Use a for loop to iterate over the colors array and log each color to the console.
colors = ["red", "green", "blue"];
for (var i=0; i<colors.length; i++){
    console.log(colors[i]);
}

//Use a while loop to iterate over the colors array and log each color to the console.
colors=["red", "green", "blue", "yellow", "purple"];
var i=0;
while (i<colors.length){
    console.log(colors[i]);
    i++; 
}


//Use a for...of loop to iterate over the colors array and log each color to the console.
let colors=["red", "green", "blue"];
for (let color of colors){
    console.log(color);
}
