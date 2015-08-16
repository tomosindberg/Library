
//  Model a library using objects.
//  A library contains shelves.
//  Shelves contain books.***
//  Books have an author and a title. ***
//  Give the library methods to add and remove a shelf.
//  A shelf should have methods to add/remove a book.  ***
//  Use a modular approach so that each type of object
//  is contained in its own file.
//  Add any functionality you think appropriate.
/////////////////////////////////////////////
//make a book.js, shelf.js, Library.js. main.js(shows add and remove function)
//add a toString method to all shelf, book and or library

var SObject = require("./shelf");
var shelf=[];

module.exports.shelf = shelf;

module.exports.Library = function Library(name){
  this.name = name;
  this.shelves = [];
  this.string = '';

  this.addShelf = function(x){
    for(i=0; i<=x; i++){
      if(shelf[i] === 'undefined'){
        shelf[i] = 'No shelf';
      }
    }
    shelf[x] = new SObject.Shelf(x);
    this.shelves.push(x);
    this.shelves.sort();
    this.string();
  };
  this.removeShelf = function(x){
    if(shelf[x] === 'undefined'){
      console.log('There is no shelf#' + x);
    }
    shelf[x] = 'undefined';
    var y = this.shelves.indexOf(x);
    this.shelves.splice(y,1);
    this.string();
  };
  this.string = function(){
    x = "name: " + this.name.toString() +
    "  shelves: " + this.shelves.toString();
    return x;
  };
};
