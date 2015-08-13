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

var library3 = require(".3library");

// loads books into book[i].bookString
(function(){
  for (i=0; i<book.length; i++){
    book[i].bkString();
    console.log(book[i].bookString);
  }
})();