/* eslint max-classes-per-file: ["error", 3] */
const form = document.querySelector('#form');
const bookContainer = document.getElementById('book-container');

function createBook(book) {
  const bookDiv = document.createElement('div');
  bookDiv.innerHTML = `<p>${book.title} by ${book.author}</p>
                      <button class ='remv-cls'>Remove</button>`;
  bookContainer.appendChild(bookDiv);
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
  }

  addBook(book) {
    this.library.push(book);
  }

  setBook() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  displayBooks() {
    this.library.forEach((book) => {
      createBook(book);
    });
  }

  removeBook(element) {
    const books = this.library;
    const indexBook = Array.prototype.indexOf.call(
      bookContainer.childNodes,
      element.parentElement,
    );
    if (element.classList.contains('remv-cls')) {
      books.forEach((book, index) => {
        if (indexBook === index) {
          books.splice(index, 1);
        }
        this.library = books;
        localStorage.setItem('library', JSON.stringify(this.library));
      });
      element.parentElement.remove();
    }
  }
}

const newbook = new Book();

document.addEventListener('DOMContentLoaded', () => {
  newbook.displayBooks();
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    createBook(book);
    newbook.addBook(book);
    newbook.setBook();
    form.reset();
  }
});
bookContainer.addEventListener('click', (e) => {
  newbook.removeBook(e.target);
});