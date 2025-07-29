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

    const newBook = new book(title, author, pages, true);

    myLibrary.push(newBook)

    displayBooks();
})

//Functionality to create new book image

function displayBooks(){
    const container = document.getElementById('book_list');
    container.innerHTML = '';

    myLibrary.forEach(book =>{
        const bookCard = document.createElement('div'); // One card per book
        bookCard.classList.add('book');

        const disImage = document.createElement("img");
        disImage.src = "imgs/ATOMIC_HABITS.png";

        const disTitle = document.createElement('h4');
        disTitle.textContent = book.title;

        const disAuthor = document.createElement('p');
        disAuthor.textContent = book.author;

        const disPages = document.createElement('p');
        disPages.textContent = `${book.pages} pages`;

        bookCard.appendChild(disImage);
        bookCard.appendChild(disTitle);
        bookCard.appendChild(disAuthor);
        bookCard.appendChild(disPages);

        container.appendChild(bookCard);
    });
}

function userInput(){
    bookInput.showModal();
}
