var bookPage = require('./book');
var libraryPage = require('./3library');

var perShelf = 3;
var shelf = [];
var shelfString =[];

// shelf[0] = new Shelf(0);  //construct shelf0-2
// shelf[1] = new Shelf(1);
// shelf[2] = new Shelf(2);

function Shelf(num){
  this.num = num;
  this.books = [];

  this.addBook = function(b, s){


    if(s == libraryPage.libraryString[s] && s == shelf[s].num){
    shelf[3] = new Shelf(3);
    // this.num = this.b.toString();
    // this.books.push(bookPage.bookString[b]);
    // shelfString.push(bookPage.bookString[b]+ " Shelf# ");
      // console.log("+++" +this.books + "  ");

      console.log(s);
    console.log(libraryPage.libraryString[0]);
    }
    // this.num = this.num.toString();
    // this.books.push(bookPage.bookString[b]);
    //shelfString.push(bookPage.bookString[a]+ " Shelf# ");
      // console.log("+++" +this.books + "  ");
  };
  this.removeBook = function(x){
    this.books.splice(x,1);
  };
}
  //updates shelfs from library.js
(function(){
  var library= libraryPage.libraryString;
  for (i=0; i<library.length; i++){
    var num = library[i];
    shelf[num] = new Shelf(num);
    console.log(shelf[num]);
  }

})();
// (function(){   //add books by how many per shelf
//   var i = 0;
//   for(j=0; j<shelf.length; j++){
//     while(i<perShelf && i<bookPage.bookString.length){
//       shelf[j].addBook(i);
//       shelfString.push( "shelf# "+j+" "+bookPage.bookString[i]);
//       i++;
//     }
//     perShelf += perShelf;
//   }
// })();

shelf[0].addBook(0,0);
module.exports.shelfString = shelfString;
console.log(shelf[3]);
// console.log(bookPage.bookString);
// console.log(shelfString);