
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

var bookPage = require('./book');
var shelfPage = require('.shelf');

// var book = [];
// var shelf = [];
// var booksPerShelf = 3;
var library = [];
library[0] = new Library("seattle");

function Library(name){
  this.name = name;
  this.shelves = [];
  // this.books = book;

  this.addShelf = function(shelfNum){
    // console.log(shelf[shelfNum].books);
    this.shelves.push("Shelf# " + shelf[shelfNum].num +"  " + shelf[shelfNum].books );
  };
  this.removeShelf = function(x){
    this.shelves.splice(x,1);

    //now remove the lower shelves in Shelves
  };
}

library[0].addShelf(0);
library[0].addShelf(1);
library[0].addShelf(2);
// library[0].addShelf(3);
library[0].removeShelf(2);
//console.log(shelf[0].addBook);
// console.log(book[4]);
 // console.log(shelf[0]);
 // console.log(book[0]);
// console.log(shelf[2]);
console.log(library[0]);

