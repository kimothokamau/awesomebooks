let title = document.getElementById('title');
let author = document.getElementById('author');
let form = document.querySelector('#form');
let bookContainer = document.getElementById('book-container');
let addBtn = document.getElementById('addBtn');

// console.log(addBtn);

let displayBooks = [];
function Book(title,author) {
    this.title = title;
    this.author = author;
}

let book = new Book();

function addBook(book){
    displayBooks.push(book);
}

function createBook(book){
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = title.value;
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = author.value;
    bookContainer.append(bookTitle,bookAuthor)
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove'
    bookContainer.append(removeBtn)
}

form.addEventListener('submit', (event) => {
    // ...
    // stop form submission
    event.preventDefault();
    createBook(book);
    console.log(createBook(book));
  
});

console.log(document.forms);