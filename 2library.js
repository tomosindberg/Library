function Book(title, author){
  this.title = title;
  this.author = author;

  // this.addBook = function(title, author) {
  //     bookT.push(title);
  //     bookA.push(author);
}
//var book1 = '';


//function addBook(){
var book1 = new Book ("In Search of Lost Time", "Marcel Proust");
var book2 = new Book ("Ulyssess", "James Joyce");
var book3 = new Book ("Moby Dick", "Herman Melville");
var book4 = new Book ("Hamlet", "William Shakespeare");
var book5 = new Book ("War and Peace", "Leo Tolstoy");
var book6 = new Book ("The Odyssey", "Homer");
var book7 = new Book ("The Divine Comedy", "Dante Alighieri");
var book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book9 = new Book("Madame Bovary", "Gustave Flaubert");

//console.log(book10);

// function addBook(title, author){
//   var i = 0;
//   while ( typeof book+i === "object"){
//     i++;
//   }
//     "book." + "i" = new Book (title, author);
//   console.log("book" + "i");
// }

var i = 5;
//var r = (book + i);  breaks no var book  != book5 object
//console.log(r);

//var book10 = "book" + "1";  book10 = string != object
//console.log(typeof r);

console.log(book5);

function Shelf(shelfNum, bookTitle, bookAuthor){
  this.shelfNum = 0;
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
}

var shelf1 = Shelf(1, book5.title, book5.author);
//console.log(shelf1);
console.log(book5.title + "  " + book5.author);


//   this.addBook = function(title, author) {
//       bookT.push(title);
//       bookA.push(author);
//   },
//   this.removeBook = function(title) {
//   var t = bookT.indexOf(title);
//   console.log(t);
//     if (bookT[t]=== title) {
//       list = ["removed" + " " + (bookT[t])];
//       bookT.splice(t,1);
//       bookA.splice(t,1);
//     }
//     if (t === -1){
//     console.log("Sorry, I dont have " + title);
//     }
//     //this.listBooks();
//   }
// }
//   listBooks: function() {
//     var booksPerShelf = 2;
//     var i = 0;
//     for (x=0; x<shelf.length; x++) {
//       for(j=0; j<booksPerShelf; j++) {
//         if (bookT[i] === undefined) {
//           break;
//         }
//         booksOnShelf[x] ="Shelf "+ x + " Title: " +
//          bookT[i] + "   Author: " + bookA[i];
//         list.push(booksOnShelf[x]);
//         i++;
//       }
//     }console.log(list);
//     if (bookT.length > (booksPerShelf * shelf.length)){
//       console.log("Too many books, need more shelfs!!");
//     }
//     if (bookT.length == (booksPerShelf * shelf.length)) {
//       console.log("Shelfs are full buy another shelf before buying more books");
//     }
//   }
// };

//   },
// }

// function Library(shelf, book)  //remove book
//   this.removeShelf = function(position, remove) {
//     shelf.splice(position, remove);
//   },
//   this.addShelf = function(add) {
//     var i = shelf.length;
//     for(j=0; j<add; j++) {
//     shelf.push({shelf: i});
//     i++;
//     }
//   },
//   this.listShelf = function() {
//     console.log(shelf);
//   }
// };

// var shelf = [],
//     list =[],
//     booksOnShelf= [],
//     bookT = [],   //book title
//     bookA = [];   //book author

// var Library = {


// var Shelf = {

// Library.addShelf(5);
// console.log(shelf);
// Library.removeShelf(1,2);
// console.log(shelf);
// Library.listShelf();
// Shelf.listBooks();

// // // //console.log(list);

// // // Shelf.listBooks();
// Shelf.removeBook("Moby Dick");
// // // //Shelf.addBooksToShelf(2);
//  Shelf.listBooks();
