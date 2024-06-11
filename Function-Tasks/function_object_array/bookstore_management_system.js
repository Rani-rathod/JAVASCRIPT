//a
class Book {
    constructor(id, title, author, price, quantity) {
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
        this.quantity=quantity;
    }
}


//b
class Inventory {
    constructor() {
        this.books=[];
    }


    // addBook
    addBook(id, title, author, price, quantity) {
        let newBook=new Book(id, title, author, price, quantity);
        this.books.push(newBook);
    }


    // updateBook()
    updateBook(id, newQuantity) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                this.books[i].quantity = newQuantity;
                return;
            }
        }
        console.log("Book not found...");
    }


    // removeBook()
    removeBook(id) {
        var updatedBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id !== id) {
                updatedBooks.push(this.books[i]);
            }
        }
        this.books = updatedBooks;
    }


    //displayBook()
    displayBooks() {
        for (var i = 0; i < this.books.length; i++) {
            console.log(`${this.books[i].title} - $${this.books[i].price} - ${this.books[i].quantity} `);
        }
    }
}


//c
let inventory = new Inventory();

inventory.addBook(1, "The Great Star", "A", 100, 5);
inventory.addBook(2, "The Great Hiro", "B", 200, 7);
inventory.addBook(3, "The Great Book", "C", 300, 9);

inventory.displayBooks();
inventory.updateBook(2, 10);
inventory.removeBook(1);
inventory.displayBooks();
