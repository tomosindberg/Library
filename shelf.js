var BObject = require('./book');
var LObject = require('./library');
book = [];
module.exports.book = book;

module.exports.Shelf = function Shelf(num){
  this.num = num;
  this.books = [];
  this.bookString = [];

  this.addBook = function(title, author){
    var x = book.length;
    book[x] = new BObject.Book(title, author);
    this.books.push(title + '   ' +author);

    var t = "Title:" + book[x].title.toString() + "  ";
    var a = "Author:" + book[x].author.toString() + ",   ";
    this.bookString += t.concat(a);
    // this.bookString = this.bookString.toUppercase();
  };
  this.removeBook = function(t, a){
    for(i=0; i<book.length; i++){
      var title = book[i].title.search(t);
      var author = book[i].author.search(a);
      if (title === 0 && author === 0){
        var del = i;
        console.log("--->" +book[i]);
        book[i] = 'undefined';
        console.log("--->2" +book[i]);
      }
    }
    for (j=0; j<LObject.shelf[j].length; j++){
      var index = LObject.shelf[j].books.indexOf(t);
      console.log("!!!" +index); //!!!!!!!!!!!need to fix

    }
      //remove book from shelfs and library

      // console.log(book[i]);
      // console.log(title);
    // }
    // this.books.splice(x,1);
  };
  // this.string = function(){
  //   var t = "Title:" + book[x].title.toString() + "  ";
  //   var a = "Author:" + book[x].author.toString() + ",   ";
  //   this.bookString += t.concat(a);
  // };
};