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

        const disImage = document.createElement("img"); //Creates new image
        disImage.src = "imgs/ATOMIC_HABITS.png";

        const disTitle = document.createElement('h4'); //Creates new H4 element
        disTitle.textContent = book.title;

        const disAuthor = document.createElement('p'); //Creates new P element for author
        disAuthor.textContent = book.author;

        const disPages = document.createElement('p'); //Creates new P element for pages
        disPages.textContent = `${book.pages} pages`;

        const statusSelect = document.createElement('select'); //Creates new select element

        const readedOption = document.createElement('option'); //Creates new option read
        readedOption.value = 'readed';
        readedOption.textContent = 'Readed';

        const unreadedOption = document.createElement('option'); //Creates new option read
        unreadedOption.value = 'unreaded';
        unreadedOption.textContent = 'Unreaded';

        statusSelect.appendChild(readedOption);
        statusSelect.appendChild(unreadedOption);  //Appending options into select

        bookCard.appendChild(disImage);
        bookCard.appendChild(disTitle);
        bookCard.appendChild(disAuthor);
        bookCard.appendChild(disPages);
        bookCard.appendChild(statusSelect); // Appending All elements into bookCard

        container.appendChild(bookCard);  //Last Append
    }); 
}

function userInput(){
    bookInput.showModal();
}
