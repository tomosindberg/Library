
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

exports.Library = function(name){
  this.name = name;
  this.shelves = [];
  //this.info = []; //contains books,shelves,NEED TO MAKE

  this.addShelf = function(shelfNum){
    var string = shelfNum.toString();
    this.shelves.push(string);
    // libraryString.push(string);
  };
  this.removeShelf = function(x){
    this.shelves.splice(x,1);
    // libraryString.splice(x,1);
  };
};
