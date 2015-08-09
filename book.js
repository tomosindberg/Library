// function addBooks(){
var book1 = new Book("In Search of Lost Time", "Marcel Proust");
var book2 = new Book("Ulyssess", "James Joyce");
var book3 = new Book("Moby Dick", "Herman Melville");
var book4 = new Book("Hamlet", "William Shakespeare");
var book5 = new Book("War and Peace", "Leo Tolstoy");
var book6 = new Book("The Odyssey", "Homer");
var book7 = new Book("The Divine Comedy", "Dante Alighieri");
var book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book9 = new Book("Madame Bovary", "Gustave Flaubert");

// convert book1-book9 to strings and input into an array
// book1.toString
// var list = [book1, book2, book3, book4, book5, book6, book7, book8, book9];
// return list.toString();
// }

function Book(title, author){
  this.title = title;
  this.author = author;
}


//console.log(book1.title.toString());
console.log(book1);