
//  Model a library using objects.
//  A library contains shelves.
//  Shelves contain books.############
//  Books have an author and a title.//////
//  Give the library methods to add and remove a shelf.///
//  A shelf should have methods to add/remove a book./////
//  Use a modular approach so that each type of object///
//   is contained in its own file.
//  Add any functionality you think appropriate.
/////////////////////////////////////////////
var Library = {
  removeShelf: function(shelfNumber) {
    var i = shelf.length - 1;
    shelf.pop({shelf: i});
    console.log("removed shelf #" + i);
  },
  addShelf: function() {
    var i = shelf.length;
    shelf.push({shelf: i});
    console.log("Added shelf #" + i);
  }
};

var Shelf = {
  addBook: function(title, author) {
      bookT.push(title);
      bookA.push(author);
  },
  removeBook: function(title) {
  var t = bookT.indexOf(title);
  console.log(t);
    if (bookT[t]=== title) {
      console.log(bookT[t] + "  " + bookA[t] + " has been removed. ");
      bookT.splice(t,1);
      bookA.splice(t,1);
    }
    if (t == -1){
    console.log("Sorry, I dont have " + title);
    }
  },

  addBooksToShelf: function() {
    booksPerShelf = 2;
    var i = 0;
    for (x=0; x<shelf.length; x++) {
      for(j=0; j<booksPerShelf; j++) {
        if (bookT[i] === undefined) {
          break;
        }
        booksOnShelf[x] ="Shelf "+ x + " Title: " +
         bookT[i]; // + "   Author: " + bookA[i];
        console.log(booksOnShelf[x]);
        i++;
      }
    }
  },

  listBooks: function() {
    for (i=0; i<bookT.length; i++) {
      console.log("Title: " + bookT[i] +
        "   Author: " + bookA[i]);
      //console.log("book  " + i);
    }
  }
};
var shelf = [],
    booksOnShelf= [],
    bookT = [],
    bookA = [];

// shelf.push({shelf: 0});
// shelf.push({shelf: 1});
Library.addShelf();
Library.addShelf();
Library.addShelf();
Library.addShelf();
Library.addShelf();
Library.addShelf();
Library.removeShelf();
console.log(shelf);


Shelf.addBook("In Search of Lost Time", "Marcel Proust");
Shelf.addBook("Ulyssess", "James Joyce");
Shelf.addBook("Moby Dick", "Herman Melville");
Shelf.addBook("Hamlet", "William Shakespeare");
Shelf.addBook("War and Peace", "Leo Tolstoy");
Shelf.addBook("The Odyssey", "Homer");
Shelf.addBook("The Divine Comedy", "Dante Alighieri");
Shelf.addBook("The Great Gatsby", "F. Scott Fitzgerald");
Shelf.addBook("Madame Bovary", "Gustave Flaubert");
//Shelf.listBooks();
Shelf.addBooksToShelf();

// var test = ["apple", "naner", "Cherry"];
// var t = test.indexOf("Cherry");
// console.log(t);

Shelf.removeBook("Moby Dick");
Shelf.addBooksToShelf();
//var t = book.indexOf('Ulyssess');
//console.log(t);
// var x = book.join();
// console.log(x);

  // removeShelf: function(shelfNumber) {
  //   var i = shelf.length;
  //   shelf.pop({shelf: i});
  // },
  // this.addBook = function(title, author){
  //   var listbooks= [];

  //   listbooks = $.map(Book, function(value, index) {
  //     return [value];

  //   });
  // };
  //   for (i=0, i<Book.length)
  //   find last book then add another number
  //   book[i] = new Book(title, author);
  // }
//   this.removeBook = function(book){
// find book by author find Book[i]
//     then remove book
  //    delete Book[i]
//   }



//Shelf.addBook("hello", "worldAuthor");
//console.log(book11);

// function Book(title, author)  {
//   this.title = title;
//   this.author = author;
//   // this.sort = function() {
//   //     console.log(this.author);
//   // };
// }
//console.log(Book.value);

//console.log(books[0]);
//console.log(books[1]);
//console.log(shelf3);

//var swLibrary = new Library("sw");
// console.log("shelf Length" + shelf.length);
// Library.addShelf();
// console.log("shelf Length" + shelf.length);
// Library.addShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.removeShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.removeShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.addShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.addShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.addShelf();
// console.log("shelf Lenght" + shelf.length);
// Library.removeShelf();
// console.log("shelf Lenght" + shelf.length);

//console.log(Library.removeShelf(2));
//console.log(Library.addShelf(2));

//console.log(shelf[3]);
// shelf1[1] =  shelf:1;
// var shelf2 = new Shelf(2);
// var shelf3 = new Shelf(3);
 // this.shelfNumber = shelfNumber;
  // removeBook: function (title){
  //   //find book title
  //   //then remove
  // }
