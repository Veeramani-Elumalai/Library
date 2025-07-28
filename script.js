const myLibrary = [];

function book(title,author,pages,activity){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.activity = activity;
}

function addBookToLibrary(){
    
}

let b1 = new book('xxx','yyy',195,'read')

console.log(b1);
