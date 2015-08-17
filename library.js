
var SObject = require("./shelf");

var shelf=[];
module.exports.shelf = shelf;

module.exports.Library = function Library(name){
  this.name = name;
  this.shelves = [];
  this.books ='';
  this.string = '';

  this.addShelf = function(x){
    for(var i=0; i<=x; i++){
      if(shelf[i] === 'undefined'){
        // shelf[i] = 'No shelf';
        i++;
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
    var x = "Library:" + this.name.toString() +
    "  Shelves:" + this.shelves.toString();
    return x;
  };
  this.books = function(){
    var bString = '';
    for(var i = 0; i<shelf.length; i++){
      if(shelf[i] === 'undefined'){
        i++;
      }
    bString = bString.concat(shelf[i].bookString.toString());
    }
    var addLib = "Library:" + this.name.toString() + "  ";
    var info =addLib.concat(bString);
    return info;
  };
};