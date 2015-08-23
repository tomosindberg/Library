var BObject = require('./book');
var MObject = require('./main');
var book = [];
module.exports.book = book;

module.exports.Shelf = function Shelf(num){
  this.num = num;
  this.bookArray = [];
  this.bookString = '';

  this.addBook = function(title, author){
    var x = book.length;
    book[x] = new BObject.Book(title, author);
    this.bookArray.push( title + '/' +author);
    this.updateBookString();
  };
  this.removeBook = function(t){
    for(var i=0; i<book.length; i++){
      if(book[i] === 'undefined'){
        i++;
      }
      var title = book[i].title.search(t);
      if (title === 0){
        book[i] = 'undefined';
        var x = this.searchBookArray(t);
        this.removeBookArray(x);
        return console.log("removed "+ t);
      }
    }
      return console.log("Sorry we dont have " + t);
  };
  this.updateBookString = function(){
    var stringInfo = "Shelf#" + this.num +
    ' '+ this.bookArray + ", ";
    this.bookString = stringInfo;
    MObject.library.books();
    // console.log("STRING UPDATED-->" + this.bookString);
  };
  this.removeBookArray = function(i){
        this.bookArray.splice(i,1);
        this.updateBookString();
        // MObject.library.books();
  };
  this.searchBookArray = function(t){
    for(var i=0; i<this.bookArray.length; i++){
      var title = this.bookArray[i].search(t);
      if(title === 0){
        return i;
      }
    }
  };

};