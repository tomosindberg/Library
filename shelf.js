
// var lPage = require('./library');
// var bPage = require('./book');

// var perShelf = 3;
// var shelf = [];
// var bookShelfs = [];
// var shelfString = lPage.libraryString;
// var bookString = bPage.bookString;

// buildShelf();  //when library runs first this breaks!!!!!
// function buildShelf(){  //library.js  errored on shelfString.length
//   for(i=0; i<shelfString.length; i++){
//     shelf[i] = new Shelf(i);
//   }
// }

exports.Shelf = function(num){
  this.num = num;
  this.books = [];

  this.addBook = function(bk, s){
    if(s == shelfString[s]) {
      this.num = s;
      this.books.push(bookString[bk]);
      bookShelfs.push( "shelf# " +s+ " " + bookString[bk]);
    }
    // else if(s !== shelfSting[s]) {

    // console.log(s);  breaks when shelf is removed!!
    // else if(indexOf())
    // }
    // // }
    else {
       console.log("There is no shelf number " +s);
    }
  };
  this.removeBook = function(x){
    this.books.splice(x,1);
  };
};

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
  // var x = shelfString.indexOf(2);
  // console.log(bookString);
// addBkPerShelf(3);

// console.log(bookShelfs);
// console.log(shelf[2]);

// // module.exports.Shelf = Shelf();
// module.exports.shelfString = shelfString;
// module.exports.bookShelfs = bookShelfs;