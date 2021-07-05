let title = document.getElementById('title');
let author = document.getElementById('author');
let form = document.querySelector('#form');
let bookContainer = document.getElementById('book-container');
let addBtn = document.getElementById('addBtn');
let rmvBtn;

// console.log(addBtn);

let displayBooks = [];
function Book(title,author) {
    this.title = title;
    this.author = author;
}

// let book = new Book();

function addBook(book){
    displayBooks.push(book);
}

function createBook(book){
    let bookDiv = document.createElement('div');
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = title.value;
    bookDiv.append(bookTitle)
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = author.value;
    // bookContainer.append(bookTitle,bookAuthor)
    bookDiv.append(bookAuthor);
    let removeBtn = document.createElement('button');
    removeBtn.className = 'remv-cls';
    removeBtn.textContent = 'remove'
    bookDiv.append(removeBtn);
    bookContainer.append(bookDiv);
    rmvBtn = document.querySelector('.remv-cls');
}

form.addEventListener('submit', (event) => {
    // ...
    // stop form submission
    event.preventDefault();
    let book = new Book(title.value, author.value);
    createBook(book);
    addBook(book);
    // console.log(createBook(book));
    console.log(displayBooks);
  
});

function removeBook(el) {
  if (el.classList.contains('remv-cls')) {
    el.parentElement.parentElement.remove();
  }

}

rmvBtn.addEventListener('click', function(e) {
  console.log(e);
  removeBook(e.target)});


// console.log(document.forms);