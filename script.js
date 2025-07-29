const myLibrary = [];
const addBook = document.getElementById('add_book');
const bookInput = document.getElementById('book_input');
const formData = document.querySelector('form');

function book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//User input function

formData.addEventListener('submit',function(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
})

function addBookToLibrary(){

}

function userInput(){
    bookInput.showModal();
}

console.log(title);
