
//  Model a library using objects.
//  A library contains shelves.
//  Shelves contain books.
//  Books have an author and a title.
//  Give the library methods to add and remove a shelf.
//  A shelf should have methods to add/remove a book.
//  Use a modular approach so that each type of object
//   is contained in its own file.
//  Add any functionality you think appropriate.
/////////////////////////////////////////////
var shelf = [],
    list =[],
    booksOnShelf= [],
    bookT = [],
    bookA = [];

var Library = {
  removeShelf: function(position, remove) {
    //var i = shelf.length - 1;
    //shelf.pop({shelf: i});
    shelf.splice(position, remove);
  },
  addShelf: function(add) {
    var i = shelf.length;
    for(j=0; j<add; j++) {
    shelf.push({shelf: i});
    i++;
    }
  },
  listShelf: function() {
    console.log(shelf);
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
      list = ["removed" + " " + (bookT[t])];
      bookT.splice(t,1);
      bookA.splice(t,1);
    }
    if (t === -1){
    console.log("Sorry, I dont have " + title);
    }
    //this.listBooks();
  },
  listBooks: function() {
    booksPerShelf = 2;
    var i = 0;
    for (x=0; x<shelf.length; x++) {
      for(j=0; j<booksPerShelf; j++) {
        if (bookT[i] === undefined) {
          break;
        }
        booksOnShelf[x] ="Shelf "+ x + " Title: " +
         bookT[i] + "   Author: " + bookA[i];
        list.push(booksOnShelf[x]);
        i++;
      }
    }console.log(list);
    if (bookT.length > (booksPerShelf * shelf.length)){
      console.log("Too many books, need more shelfs!!");
    }
    if (bookT.length == (booksPerShelf * shelf.length)) {
      console.log("Shelfs are full buy another shelf before buying more books");
    }
  }
};

Library.addShelf(5);
console.log(shelf);
Library.removeShelf(1,2);
console.log(shelf);
Library.listShelf();
Shelf.listBooks();

// Shelf.addBook("In Search of Lost Time", "Marcel Proust");
// Shelf.addBook("Ulyssess", "James Joyce");
// Shelf.addBook("Moby Dick", "Herman Melville");
// Shelf.addBook("Hamlet", "William Shakespeare");
// Shelf.addBook("War and Peace", "Leo Tolstoy");
// Shelf.addBook("The Odyssey", "Homer");
// Shelf.addBook("The Divine Comedy", "Dante Alighieri");
// Shelf.addBook("The Great Gatsby", "F. Scott Fitzgerald");
// Shelf.addBook("Madame Bovary", "Gustave Flaubert");
// Shelf.listBooks();
// // //console.log(list);

// // Shelf.listBooks();
// Shelf.removeBook("Moby Dick");
// // //Shelf.addBooksToShelf(2);
// Shelf.listBooks();
