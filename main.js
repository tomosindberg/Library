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
  //add a toString method to all shelf, book and or library

var book = require("./book"),
  shelf = require("./shelf"),
  library = require(".library");

var library3 = requier(".3library");

function convert(array){
    for(i=0; i<book.length; i++){
      book[i] = book[i].title.toString() +' : ' + book[i].author.toString();
    }
}
convert(book);
console.log(book);

// convertBook();

// // shelf[0].addBook(0);
// // shelf[0].addBook(1);
// addAllBooks(2);
// //console.log(shelf);
// convertShelf();
// //console.log(shelf[0]);
// library[0].addShelf(0);
// library[0].addShelf(1);
// library[0].addShelf(2);
// library[0].addShelf(3);
// library[0].addShelf(4);
// //library[0].removeShelf(3);

// //console.log(library[0].shelves);
// console.log(book);
// console.log(shelf);
// console.log(library);


//shelf[2].remove(5);
//console.log(shelf[2].books);