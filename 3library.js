
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

var book = [];
var shelf = [];
var library =[];

book[0] = new Book("In Search of Lost Time", "Marcel Proust");   //construct book1-9
book[1] = new Book("Ulyssess", "James Joyce");
book[2] = new Book("Moby Dick", "Herman Melville");
book[3] = new Book("Hamlet", "William Shakespeare");
book[4] = new Book("War and Peace", "Leo Tolstoy");
book[5] = new Book("The Odyssey", "Homer");
book[6] = new Book("The Divine Comedy", "Dante Alighieri");
book[7] = new Book("The Great Gatsby", "F. Scott Fitzgerald");
book[8] = new Book("Madame Bovary", "Gustave Flaubert");

shelf[0] = new Shelf(0);  //construct shelf1-5
shelf[1] = new Shelf(1);
shelf[2] = new Shelf(2);
shelf[3] = new Shelf(3);
shelf[4] = new Shelf(4);

library[0] = new Library("seattle");

convertBook();

// shelf[0].addBook(0);
// shelf[0].addBook(1);
addAllBooks(2);
//console.log(shelf);
convertShelf();
//console.log(shelf[0]);
library[0].addShelf(0);
library[0].addShelf(1);
library[0].addShelf(2);
library[0].addShelf(3);
library[0].addShelf(4);
//library[0].removeShelf(3);

//console.log(library[0].shelves);
console.log(book);
console.log(shelf);
console.log(library);


//shelf[2].remove(5);
//console.log(shelf[2].books);



function Book(title, author){
  this.title = title;
  this.author = author;
}

function Shelf(num){
  this.num = num;
  this.books = [];

  this.addBook = function(bookNum){
    this.books.push(book[bookNum]);
    //console.log(this.books);
  };
  this.remove = function(x){
    this.books.splice(x,1);
  };
}

function Library(name){
  this.name = name;
  this.shelves = [];
  this.books = book;

  this.addShelf = function(shelfNum){
    this.shelves.push(shelf[shelfNum]);
    //console.log(this.shelves);
  };
  this.removeShelf = function(x){
    this.shelves.splice(x,1);
  };
}


function convertBook(){
    for(i=0; i<book.length; i++){
      book[i] = book[i].title.toString() + ' : '
      + book[i].author.toString();
    }
}

function convertShelf(){
    for(i=0; i<shelf.length; i++){
      shelf[i] = shelf[i].num.toString();
    }
}

function addAllBooks(booksPerShelf){
  var x=0;
  var y = booksPerShelf;
  for(i=0; i<shelf.length; i++){
    while (x<y) {
    shelf[i].books.push(book[x]);
    x++;
    }
    if (x<book.length){
    y += booksPerShelf;
    }
  }
}





