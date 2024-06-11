//Define a variable named products and assign it an array containing several objects.
//Each object should represent a product and have properties like id, name, price, and category.
let products=[
    { id:1, name:"Banana", price:1, category:"Food"},
    { id:2, name:"Shampoo", price:5, category:"Personal Care"},
    { id:3, name:"Apple", price:2, category:"Food"},
    { id:4, name:"TV", price:299, category:"Electronics"},
    { id:5, name:"T-shirt", price:9, category:"Clothing"},
    { id:6, name:"Bread", price:2, category:"Food"}
];


//Use the forEach method to iterate over the products array and log each product's name and price to the console.
products.forEach(function(product){
    console.log(`${product.name} - $${product.price}`);
});


//Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes 
//each product's name and a new price which is the original price plus the tax. Log the productsWithTax array 
//to the console.
let taxRate = 0.10;
let productsWithTax=products.map(function(product){
    return{
        name:product.name,
        price:(product.price*(1+taxRate)).toFixed(2)
    };
});
console.log("Products with Tax:", productsWithTax);




//Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
//Log the foodProducts array to the console.
let foodProducts = products.filter(function(product){
    return product.category === "Food";
});
console.log("Food Products:", foodProducts);



//Use filter to find products with a price under $10, then map to return a string for each that includes
// the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProducts and log it to the console.
function getAffordableProducts(products){
    return products
        .filter(function(product) {
            return product.price < 10;
        })
        .map(function(product) {
            return `${product.name} - $${product.price}`;
        });
}
console.log(getAffordableProducts(products));


//Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice.
//Log totalPrice after the loop.
let totalPrice = 0;
products.forEach(function(product) {
    totalPrice += product.price;
});
console.log("Total Price:",totalPrice.toFixed(2));
