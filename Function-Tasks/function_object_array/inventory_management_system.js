//Define an array called inventory containing several objects, each representing a product in the store's 
//inventory. Each object should have properties such as id, name, price, quantity, and any other relevant details.
let inventory = [
    { id: 1, name: "Phone", price: 11, quantity: 5 },
    { id: 2, name: "Laptop", price: 50, quantity: 9 },
    { id: 3, name: "Speaker", price: 30, quantity: 4 },
];

//Create a class called Product to represent a product, and use this class to create objects for 
//each product in the inventory array.
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
function mapInventoryToProducts(inventory) {
    return inventory.map(item=>new Product(item.id, item.name, item.price, item.quantity));
}
console.log(mapInventoryToProducts(inventory));



// Define function addProduct()
function addProduct(id, name, price, quantity){
    let newProduct = new Product(id, name, price, quantity);
    products.push(newProduct);
}
addProduct(4, "Charger", 5, 4);
console.log(products);


// Define function updateProduct()
function updateProduct(productId, newQuantity) {
    let productToUpdate = products.find(function(product) {
        return product.id === productId;
    });
    if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
        console.log("Quantity updated successfully.");
    } else {
        console.log("Product not found.");
    }
}
updateProduct(4, 50);
console.log(products);

// Define function removeProduct()
function removeProduct(productId) {
    let index = products.findIndex(function(product) {
        return product.id === productId;
    });
    if (index !== -1) {
        products.splice(index, 1);
        console.log(`Product with id: ${productId} removed successfully.`);
    } else {
        console.log("Product not found.");
    }
    console.log(products);
}
removeProduct(4);

// Define function displayProducts() 
function displayProducts() {
    products.forEach(function(product) {
        console.log(`${product.name} - $${product.price} (${product.quantity})`);
    });
}
displayProducts();
