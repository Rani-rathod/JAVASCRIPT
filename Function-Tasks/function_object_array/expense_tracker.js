//Define an array called expenses containing several objects, each representing an expense. 
//Each expense object should have properties such as id, name, amount, date, and any other relevant details.

let expenses=[
    {id:1, name:"A", amount:50, date:"14-05-2024"},
    {id:1, name:"B", amount:60, date:"15-05-2024"},
    {id:1, name:"C", amount:70, date:"16-05-2024"}
]


//Create a class called Expense to represent an expense, and use this class to create objects for each expense in the expenses array.

class Expense{
    constructor(id,name,amount,date){
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.date=date;
    }
}
let expenseObject=expenses.map(expense=>new Expense(expense.id, expense.name, expense.amount, expense.date));


//Define functions addExpense()

function addExpense(id,name,amount,date){
    let newExpense=new Expense(id,name,amount,date);
    expenseObject.push(newExpense);
}
console.log(addExpense(5))


//Define functions updateExpense()
function updateExpense(id, updatedExpense) {
    let index = expenseObjects.findIndex(expense => expense.id === id);
    if (index !== -1) {
        expenseObjects[index] = updatedExpense;
    }
}

//Define functions removeExpense()
function removeExpense(id) {
    expenseObjects = expenseObjects.filter(expense => expense.id !== id);
}


//Define functions displayExpenses()
function displayExpenses() {
    expenseObjects.forEach(expense => {
        console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
    });
}
