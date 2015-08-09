
function convert(array){
    for(i=0; i<book.length; i++){
      book[i] = book[i].title.toString() +' : ' + book[i].author.toString();
    }
}
convert(book);
console.log(book);