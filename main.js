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


var LObject = require("./library");
var SObject = require("./shelf");
var BObject = require("./book");

// var book = [];

var library = new LObject.Library('Seattle');
// console.log(library); //****
// library.addShelf(0);

//
library.addShelf(1);
library.addShelf(0);
library.addShelf(2);
library.addShelf(3);
library.addShelf(6);
library.addShelf(4);
library.addShelf(5);
// library.string();
// console.log(library);
// console.log(library.string()); //****

// console.log(LObject.shelf[0]);
// library.removeShelf(3);
// library.removeShelf(1);
// console.log(LObject.shelf[1]);
// console.log(LObject.lshelf[0].num);
// console.log(LObject.shelf[2]);
// console.log(LObject.lshelf[2]);
// console.log(LObject.shelf[3]);
// console.log(LObject.shelf[4]);
// console.log(LObject.shelf[5]);

// console.log(library);
// console.log(LObject.lshelf[1]);

// console.log(library.string());
// console.log(library);  //*****
LObject.shelf[0].addBook("In Search of Lost Time", "Marcel Proust");
LObject.shelf[0].addBook("Ulyssess", "James Joyce");
LObject.shelf[1].addBook("Moby Dick", "Herman Melville");
LObject.shelf[2].addBook("Hamlet", "William Shakespeare");
LObject.shelf[3].addBook("War and Peace", "Leo Tolstoy");
LObject.shelf[3].addBook("The Odyssey", "Homer");
LObject.shelf[5].addBook("The Divine Comedy", "Dante Alighieri");
LObject.shelf[5].addBook("The Great Gatsby", "F. Scott Fitzgerald");
LObject.shelf[4].addBook("Madame Bovary", "Gustave Flaubert");

LObject.shelf[5].removeBook("The Great Gatsby", "F. Scott Fitzgerald");
// LObject.shelf[4].removeBook("Madame Bovary", "Gustave Flaubert");

// console.log(LObject.shelf[0].bookString);
// console.log(SObject.book[0]);
console.log(LObject.shelf[5].books);//String);
console.log(LObject.shelf[5].bookString);
// console.log(LObject.shelf[5]);

// console.log(SObject.book[5]);
