//Define the Book Class. The class should take parameters for title, author, publisher, year, and genre. 
//Inside the constructor method, set these parameters as properties of the book object.
class Book {
    constructor(title, author, publisher, year, genre) {
        this.title=title;
        this.author=author;
        this.publisher=publisher;
        this.year=year;
        this.genre=genre;
    }


//Add a method named describe() that logs a brief description of the book, combining the title, 
//author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004)".
    describe(){
        console.log(`${this.title} - ${this.author} (${this.year})`);
    }



//Add a method named displayGenre() that logs the genre of the book.  
    displayGenre(){
        console.log(`Genre: ${this.genre}`);
    }
}

//Create an object named classicBook with properties representing a classic novel’s details. Log this object to the console.
let classicBook=new Book(
    "Pride and Prejudice",
    "Jane Austen",
    "T. Egerton, Whitehall",
    1813,
    "Classic"
);
console.log(classicBook);


//Create an object named sciFiBook with properties representing a science fiction book. Log this object to the console.
let sciFiBook=new Book(
    "Dune",
    "Frank Herbert",
    "Chilton Books",
    1965,
    "Science Fiction"
);
console.log(sciFiBook);


//On the classicBook object, call the describe() method to see a summary of the book.
classicBook.describe();

//Call the displayGenre() method on the sciFiBook object to log the genre.
sciFiBook.displayGenre();

