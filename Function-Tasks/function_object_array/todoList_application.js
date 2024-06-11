
//Define an array called tasks containing several objects, each representing a task in the to-do list.
// Each task object should have properties such as id, description, dueDate, status, and any other relevant details.
let tasks = [
    {
        id: 1,
        description: "Strong project",
        dueDate: "2024-05-20",
        status: "Pending",
    }
]

//Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array.
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }
}



tasks = [];

// addTask
function addTask(id, description, dueDate, status) {
    let task = new Task(id, description, dueDate, status);
    tasks.push(task);
}
addTask(1, 'project', '2024-05-20', 'Pending');

// updateTask
// function updateTask(id, updatedDescription, updatedDueDate, updatedStatus) {
//     let task = tasks.find(function(task) {
//         return task.id === id;
//     });
// }
// updateTask(2, 'Submit test', '2024-05-26', 'In Progress');

// removeTask
function removeTask(id) {
    task=tasks.filter(function(task) {
        return task.id !== id;
    });
}
removeTask(3);

// displayTasks
function displayTasks() {
    tasks.forEach(function(task) {
        console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
}
displayTasks();
