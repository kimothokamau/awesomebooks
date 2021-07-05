let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let form = document.getElementById('form')
let bookContainer = document.getElementById('book-container');

let displayBooks = [];
function Book(title,author) {
    this.title = title;
    this.author = author;
}

let book = new Book(title,author);

function addBook(book){
    displayBooks.push(book);
}

function displayBooks(book){
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = author;
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = title;
    bookContainer.append(bookAuthor,bookTitle)
}