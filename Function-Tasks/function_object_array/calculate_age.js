
//Define an array called people containing several objects, each representing a person. 
//Each object should have properties such as name, and age.
let people=[
    { name: "Rani", age: 19},
    { name: "Saurav", age: 10},
    { name: "Guddu", age: 7},
    { name: "Lavanya", age: 9}
];


//Define a function called calculateAverageAge() that takes the people array as input and 
//returns the average age of all the people in the array.
function calculateAverageAge(people) {
    var totalAge = 0;
    var count = people.length;
    people.forEach(function(person) {
        totalAge += person.age;
    });
    var averageAge = totalAge / count;
    return averageAge;
}

//Call the calculateAverageAge() function with the people array as an argument and log the result to the console.
console.log(calculateAverageAge(people));

