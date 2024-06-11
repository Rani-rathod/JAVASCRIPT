
//Define an array called cart containing several objects, each representing an item in the shopping cart. 
//Each object should have properties such as name, price, and quantity.
let cart=[
    { name: 'Product 1', price: 10, quantity: 2},
    { name: 'Product 2', price: 20, quantity: 1},
    { name: 'Product 3', price: 5, quantity: 3}
];

//Define a function called calculateTotalPrice() that takes the shopping cart array as input and returns the 
//total price of all items in the shopping cart.
function calculateTotalPrice(cart) {
    let totalPrice=0;
    for (let item of cart) {
        totalPrice+=item.price*item.quantity;
    }
    return totalPrice;
}

//Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.
console.log(calculateTotalPrice(cart));
