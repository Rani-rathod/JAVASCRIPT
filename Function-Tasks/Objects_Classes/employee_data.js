
//Define the Employee Class. The class should take parameters for name, email, age, department, position, and
//salary. Inside the constructor method, set these parameters as properties of the employee object.
class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    //Add a method named introduce() inside the class that logs a greeting and the employee's name and position.
    introduce() {
        console.log(`Hello, my name is ${this.name}, and I work as a ${this.position} in the ${this.department} department.`);
    }

    //Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}

//Create an object named newEmployee with properties representing a new employee's name, email, age, department, position,
//and salary. Log this object to the console.

let newEmployee = new Employee("Rani", "rani@gmail.com.com", 19, "Engineering", "Software Developer", 60000);


//Create another object named manager with properties representing a manager. Log this object to the console.
let manager = new Employee("Guddu", "guddu@gmail.com", 6, "Management", "Manager", 80000);
console.log(newEmployee);
console.log(manager);

//On the newEmployee object, call the introduce() method to see a greeting and role.
newEmployee.introduce();

//Call the displaySalary() method on the manager object to log the salary details.
manager.displaySalary();
