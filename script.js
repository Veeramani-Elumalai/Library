const myLibrary = [];
const bookInput = document.getElementById('book_input');
const formData = document.querySelector('form');
const bookListContainer = document.querySelector('#book_list');
const bookTitle = document.getElementById('title');

class Book { 
    constructor(title, author, pages, read) { // Added 'read' parameter
        this.title = title;
        this.author = author;
        this.pages = pages; 
        this.read = read; // Assigned 'read' property
    }
}

bookTitle.addEventListener('input', (event) => {
    const input = event.target;
    input.setCustomValidity(""); // Clear previous custom validity

    if (!input.validity.valid) {
        return;
    }

    // Check if input is a number (which it shouldn't be for a book title)
    if (!isNaN(input.value)) {
        input.setCustomValidity("Book Title must be text");
    }
});
// User input function
formData.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is_read').checked; // Checkbox value

    const newBook = new Book(title, author, pages, isRead); // Pass all four arguments

    myLibrary.push(newBook);
    displayBooks(); // Call the display function
    bookInput.close(); // Close the dialog after adding a book
});

// Function to display the books
function displayBooks() {
    bookListContainer.innerHTML = ''; // Clear the container first

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');

        const disImage = document.createElement("img");
        disImage.src = "imgs/ATOMIC_HABITS.png"; // Use a placeholder image

        const disTitle = document.createElement('h4');
        disTitle.textContent = book.title;

        const disAuthor = document.createElement('p');
        disAuthor.textContent = book.author;

        const disPages = document.createElement('p');
        disPages.textContent = `${book.pages} pages`;

        const statusSelect = document.createElement('select');
        const readedOption = document.createElement('option');
        readedOption.value = 'readed';
        readedOption.textContent = 'Readed';

        const unreadedOption = document.createElement('option');
        unreadedOption.value = 'unreaded';
        unreadedOption.textContent = 'Unreaded';

        statusSelect.appendChild(readedOption);
        statusSelect.appendChild(unreadedOption);

        if (book.read) {
            readedOption.selected = true;
        } else {
            unreadedOption.selected = true;
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookCard.appendChild(disImage);
        bookCard.appendChild(disTitle);
        bookCard.appendChild(disAuthor);
        bookCard.appendChild(disPages);
        bookCard.appendChild(statusSelect);
        bookCard.appendChild(deleteBtn);

        bookListContainer.appendChild(bookCard);
    });
}

function userInput() {
    formData.reset(); // Reset the form fields before showing the dialog
    bookInput.showModal();
}

userInput();