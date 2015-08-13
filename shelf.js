var bookPage = require('./book');

var perShelf = 3;
var shelf = [];
var shelfString =[];

shelf[0] = new Shelf(0);  //construct shelf0-2
shelf[1] = new Shelf(1);
shelf[2] = new Shelf(2);

function Shelf(num){
  this.num = num;
  this.books = [];

  this.addBook = function(a){
    this.num = this.num.toString();
    this.books.push(bookPage.bookString[a]);
    //shelfString.push(bookPage.bookString[a]+ " Shelf# ");
      // console.log("+++" +this.books + "  ");
  };
  this.removeBook = function(x){
    this.books.splice(x,1);
  };
}

(function(){   //add books by how many per shelf
  var i = 0;
  for(j=0; j<shelf.length; j++){
    while(i<perShelf && i<bookPage.bookString.length){
      shelf[j].addBook(i);
      shelfString.push( "shelf# "+j+" "+bookPage.bookString[i]);
      i++;
    }
    perShelf += perShelf;
  }
})();

module.exports.shelfString = shelfString;
// console.log(bookPage.bookString);
console.log(shelfString);