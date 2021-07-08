import { DateTime } from './luxon.js';
const form = document.querySelector('#form');
const bookLibrary = document.getElementById('book-library');
const bookListLink = document.getElementById('booklist-link');
const newBookLink = document.getElementById('newbook-link');
const contactLink = document.getElementById('contact-link');
const addbookSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact-info');
const listSection = document.getElementById('book-list');


const dateTime = () => {
  const dateTime = document.getElementById('dateTime');
  const dt = DateTime.now();
  dateTime.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};

function createBook(book) {
  const bookDiv = document.createElement('tr');
  bookDiv.className = 'book-container';
  bookDiv.innerHTML = `<td>${book.title} by ${book.author}</td>
                      <td><button class ='remv-cls'>Remove</button></td>`;
  bookLibrary.appendChild(bookDiv);
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
      bookLibrary.childNodes,
      element.parentElement.parentElement,
    );
    if (element.classList.contains('remv-cls')) {
      books.forEach((book, index) => {
        if (indexBook === index) {
          books.splice(index, 1);
        }
        this.library = books;
        localStorage.setItem('library', JSON.stringify(this.library));
      });
      element.parentElement.parentElement.remove();
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
bookLibrary.addEventListener('click', (e) => {
  newbook.removeBook(e.target);
});

newBookLink.addEventListener('click', (e) => {
  addbookSection.className = 'display-block';
  contactSection.className = 'display-none';
  listSection.className = 'display-none';

})

contactLink.addEventListener('click', (e) => {
  contactSection.className = 'display-block'
  addbookSection.className = 'display-none';
  listSection.className = 'display-none';
})

bookListLink.addEventListener('click', (e) => {
  listSection.className = 'display-block';
  contactSection.className = 'display-none';
  addbookSection.className = 'display-none';
})

dateTime();






