
//  Model a library using objects.
//  A library contains shelves.
//  Shelves contain books.***
//  Books have an author and a title. ***
//  Give the library methods to add and remove a shelf.
//  A shelf should have methods to add/remove a book.  ***
//  Use a modular approach so that each type of object
//   is contained in its own file.
//  Add any functionality you think appropriate.
/////////////////////////////////////////////
  //make a book.js, shelf.js, Library.js. main.js(shows add and remove function)
  //add a toString method to all shelf, book or library

var book1 = new Book("In Search of Lost Time", "Marcel Proust");   //construct book1-9
var book2 = new Book("Ulyssess", "James Joyce");
var book3 = new Book("Moby Dick", "Herman Melville");
var book4 = new Book("Hamlet", "William Shakespeare");
var book5 = new Book("War and Peace", "Leo Tolstoy");
var book6 = new Book("The Odyssey", "Homer");
var book7 = new Book("The Divine Comedy", "Dante Alighieri");
var book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book9 = new Book("Madame Bovary", "Gustave Flaubert");

function Book(title, author){
  this.title = title;
  this.author = author;
}

var shelf1 = new Shelf(1);  //construct shelf1-5
var shelf2 = new Shelf(2);
var shelf3 = new Shelf(3);
var shelf4 = new Shelf(4);
var shelf5 = new Shelf(5);

shelf1.add(book1);   //add books to shelfs
shelf1.add(book2);
shelf2.add(book3);
shelf2.add(book4);
shelf3.add(book5);
shelf3.add(book6);
shelf4.add(book7);
shelf4.add(book8);
shelf5.add(book9);


Library.listBooks = function(){
  for (i=0; i<9; i++){
    allBooks += (book1);
  }
};

listBooks();
var allBooks = [];
var listShelfs = [];
console.log(allBooks);
// console.log(shelf3);
// shelf3.remove(book6);  //remove book6 from shelf3
// console.log(shelf3);
// shelf3.add(book6);  //add book6 back to shelf3

function Shelf(num){
  this.books = [];
  this.num = num;

  this.add = function(book){
    this.books.push(book.title + "  " + book.author);
    //(this.books).push(book.title.toString() + "  by " + book.author.toString());
  };
  this.remove = function(book){
    var x = this.books.indexOf(book);
    this.books.splice(x);
  };
}

function Library(name) {
  this.name = name;
  this.books = [];
  this.shelfs = [];

  this.addShelf = function(shelf){
    var sString = shelf.num.toString();
    this.shelfs.push(sString);
    //this.books.push(shelf.books.toString());  add shelf && books
    };
  this.removeShelf = function(shelf){
    var x = this.shelfs.indexOf(shelf);
    this.shelfs.splice(x);
  };
  this.addBook = function(book){
    this.books.push(book.title + "  " + book.author);  //doesnt add books??
  };
}
var seattle = new Library("seattle");

// console.log(book1);
// console.log(shelf3);
//console.log(shelf1.books);
seattle.addShelf(shelf2);
console.log(seattle);


seattle.addBook(book1);
console.log(seattle);

// console.log(seattle.shelfs);
 seattle.removeShelf(shelf2);
//console.log(seattle.shelfs);
 console.log(seattle);

  //make a book.js, shelf.js, Library.js. main.js(shows add and remove function)
  //add a toString method to all shelf, book or library




// var shelf1 = new Shelf(1, book5.title, book5.author);
//console.log(shelf1);
// console.log(book5.title + "  " + book5.author);


//   this.addBook = function(title, author) {
//       bookT.push(title);
//       bookA.push(author);
//   },
//   this.removeBook = function(title) {
//   var t = bookT.indexOf(title);
//   console.log(t);
//     if (bookT[t]=== title) {
//       list = ["removed" + " " + (bookT[t])];
//       bookT.splice(t,1);
//       bookA.splice(t,1);
//     }
//     if (t === -1){
//     console.log("Sorry, I dont have " + title);
//     }
//     //this.listBooks();
//   }
// }
//   listBooks: function() {
//     var booksPerShelf = 2;
//     var i = 0;
//     for (x=0; x<shelf.length; x++) {
//       for(j=0; j<booksPerShelf; j++) {
//         if (bookT[i] === undefined) {
//           break;
//         }
//         booksOnShelf[x] ="Shelf "+ x + " Title: " +
//          bookT[i] + "   Author: " + bookA[i];
//         list.push(booksOnShelf[x]);
//         i++;
//       }
//     }console.log(list);
//     if (bookT.length > (booksPerShelf * shelf.length)){
//       console.log("Too many books, need more shelfs!!");
//     }
//     if (bookT.length == (booksPerShelf * shelf.length)) {
//       console.log("Shelfs are full buy another shelf before buying more books");
//     }
//   }
// };

//   },
// }

// function Library(shelf, book)  //remove book
//   this.removeShelf = function(position, remove) {
//     shelf.splice(position, remove);
//   },
//   this.addShelf = function(add) {
//     var i = shelf.length;
//     for(j=0; j<add; j++) {
//     shelf.push({shelf: i});
//     i++;
//     }
//   },
//   this.listShelf = function() {
//     console.log(shelf);
//   }
// };

// var shelf = [],
//     list =[],
//     booksOnShelf= [],
//     bookT = [],   //book title
//     bookA = [];   //book author

// var Library = {


// var Shelf = {

// Library.addShelf(5);
// console.log(shelf);
// Library.removeShelf(1,2);
// console.log(shelf);
// Library.listShelf();
// Shelf.listBooks();

// // // //console.log(list);

// // // Shelf.listBooks();
// Shelf.removeBook("Moby Dick");
// // // //Shelf.addBooksToShelf(2);
//  Shelf.listBooks();
