
//function makeShelfs(){
var shelf1 = new Shelf('1');
var shelf2 = new Shelf(2);
var shelf3 = new Shelf(3);
var shelf4 = new Shelf('4');
var shelf5 = new Shelf(5);
//}

//makeShelfs();

function Shelf(num){
  this.books = [];
  this.num = num;

  this.add = function(book){
    this.books.push(book.title + "  " + book.author);
    //(this.books).push(book.title.toString() + "  by " + book.author.toString());
  };
  this.remove = function(book){
    var x = this.books.indexOf(book);
    this.books.splice(x);
  };
}

//seattle.addShelf(shelf2)
shelf1.add(book1);
console.log(shelf1);