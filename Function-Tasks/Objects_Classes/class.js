
//Create a new object named friend with similar properties to the student object, but with values
//representing a friend's name, email, age, and address. Log the friend object to the console.
let friend={
    name:"Rani",
    email:"abc20@.com",
    age:19,
    address:{
        country:"India",
        city:"Pune",
        pin_code:1234
    }
}
// console.log(friend)


//Create a new object named topper with similar properties to the student object, but with values 
//representing a topper’s name, email, age, and address. Log the friend object to the console.
let topper = {
    name: "guddu",
    email: "guddu@gmail.com",
    age: 7,
    address:{
        country:"India",
        city:"Pune",
        pin_code:1234
    }};
console.log(topper);


//Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. 
//Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.


class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.country = country;
        this.city = city;
        this.pin_code = pin_code;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    //Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).
    getFullAddress() {
        return `${this.country}, ${this.city} - ${this.pin_code}`;
    }
}


//Create objects of the Student class for yourself, your friend, and another student. Log these objects 
//to the console to see the created objects. 
let myself = new Student("Guddu", "guddu@gmail.com", 7, "India", "Bangalore", "560038");
let myFriend = new Student("Saurav", "saurav@gmail.com", 10, "India", "Mumbai", "400001");
let anotherStudent = new Student("Lavanya", "lav@gmail.com", 9, "India", "Delhi", "110001");


//Call the getFullAddress method on one of the Student objects and log the result to the console.
console.log(myself);
console.log(myFriend);
console.log(anotherStudent);

console.log(myself.getFullAddress());
