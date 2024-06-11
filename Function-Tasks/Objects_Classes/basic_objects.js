//a
let student = {};

//b
student.name = "Rani";
student.email = "abc@gmail.com";
student.age = 19;

//c
console.log(student.name);

//d
student.age = 10;
console.log(student.age);

//e
student.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};
student.greet();

//Nested Object:

//a
student.address = {};
student.address.country = "India";
student.address.city = "Pune";
student.address.pin_code = "12345";

//b
console.log(student.address.country);

//c
student.address.pin_code = "54321";

console.log(student.address);
