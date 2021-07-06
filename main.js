const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.querySelector('#form');
const bookContainer = document.getElementById('book-container');

let  library = [];
if (localStorage.getItem('library')) {
    library = JSON.parse(localStorage.getItem('library'))
  } else {
    library = []
}

const data = JSON.parse(localStorage.getItem('library'));

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(book) {
  library.push(book);
}

function createBook() {
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('h3');
  bookTitle.textContent = title.value;
  bookDiv.append(bookTitle);
  const bookAuthor = document.createElement('h3');
  bookAuthor.textContent = author.value;
  bookDiv.append(bookAuthor);
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remv-cls';
  removeBtn.textContent = 'remove';
  bookDiv.append(removeBtn);
  bookContainer.append(bookDiv);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const book = new Book(title.value, author.value);
  createBook(book);
  const obj = localStorage.setItem(book.title, JSON.stringify(book));
  addBook(obj);
});

function removeBook(el) {
  if (el.classList.contains('remv-cls')) {
    el.parentElement.remove();
  }
}

bookContainer.addEventListener('click', (e) => {
  removeBook(e.target);
});

function displayBooks(){
  data.forEach(book => {
    createBook(book);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
