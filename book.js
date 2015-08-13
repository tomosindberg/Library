var book = [];
var bookString= [];

book[0] = new Book("In Search of Lost Time", "Marcel Proust");   //construct book1-9
book[1] = new Book("Ulyssess", "James Joyce");
book[2] = new Book("Moby Dick", "Herman Melville");
book[3] = new Book("Hamlet", "William Shakespeare");
book[4] = new Book("War and Peace", "Leo Tolstoy");
book[5] = new Book("The Odyssey", "Homer");
book[6] = new Book("The Divine Comedy", "Dante Alighieri");
book[7] = new Book("The Great Gatsby", "F. Scott Fitzgerald");
book[8] = new Book("Madame Bovary", "Gustave Flaubert");

// loads books into book[i].bookString
(function(){
  for (i=0; i<book.length; i++){
    book[i].bkString();
    //console.log(book[i].bookString);
  }
})();

function Book(title, author){
  this.title = title;
  this.author = author;
  //this.bookString = [];

  this.bkString = function(){
    bookString.push("Title: " + this.title+ "    Author: " + this.author);
  };
}

// exports.bookString = Book.bookString;
// console.log(book[0]);
// console.log(bookString);
module.exports.bookString = bookString;
module.exports.Book = Book;