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

// var book = require("./book");
// var shelf = require("./shelf");
var LObject = require("./library");
var SObject = require("./shelf");
var BObject = require("./book");

var libraryString = [],
    shelf = [],
    shelfString = [],
    book = [],
    bookString= [];


var library = new LObject.Library('seattle');
console.log(library); //****
library.addShelf(0);
library.addShelf(1);
library.addShelf(2);
library.removeShelf(1);

console.log(library);  //*****

// var shelf0 = new SObject.Shelf(0);
// var shelf1 = new SObject.Shelf(1);
// var shelf2 = new SObject.Shelf(2);
buildShelf();  //when library runs first this breaks!!!!!
function buildShelf(){  //library.js  errored on shelfString.length
  for(i=0; i<shelfString.length; i++){
    shelf[i] = new Shelf(i);

  }
}
console.log(shelf[0]);  //******
console.log(shelfString);


book[0] = new BObject.Book("In Search of Lost Time", "Marcel Proust");   //construct book1-9
book[1] = new BObject.Book("Ulyssess", "James Joyce");
book[2] = new BObject.Book("Moby Dick", "Herman Melville");
book[3] = new BObject.Book("Hamlet", "William Shakespeare");
book[4] = new BObject.Book("War and Peace", "Leo Tolstoy");
book[5] = new BObject.Book("The Odyssey", "Homer");
book[6] = new BObject.Book("The Divine Comedy", "Dante Alighieri");
book[7] = new BObject.Book("The Great Gatsby", "F. Scott Fitzgerald");
book[8] = new BObject.Book("Madame Bovary", "Gustave Flaubert");


console.log(book[1]);





// function addBkPerShelf(perShelf){   //add books by how many per shelf
//   // bookShelfs= [];
//   var i = 0;
//   // shelfString
//   for(s=0; s<shelfString.length; s++){
//     while(i<perShelf && i<bookString.length){
// // while(shelf[s] == 'undefined'){
// //    s++;  error when remove shelf!!!!
// // }
//       shelf[s].addBook(i, s);
//       console.log(shelf[s]);
//       i++;
//     }
//     perShelf += perShelf;
//   }
// }