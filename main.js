/* eslint max-classes-per-file: ["error", 3] */
const form = document.querySelector('#form');
const bookContainer = document.getElementById('book-container');
let library = [];

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
  }

  displayBooks() {
    const data = getBooks();
    data.forEach((book) => {
      Book.createBook(book);
    });
  }

  setBook(book) {
    const books = getBooks();
    books.push(book);
    library = books;
    localStorage.setItem('library', JSON.stringify(books));
  }

  getBooks() {
    if (localStorage.getItem('library')) {
      library = JSON.parse(localStorage.getItem('library'));
    } else {
      library = [];
    }
    return this.library;
  }

  static removeBook(element) {
    const books = Storage.getBooks();
    const indexBook = Array.prototype.indexOf.call(
      bookContainer.childNodes,
      element.parentElement,
    );

    if (element.classList.contains('remv-cls')) {
      books.forEach((book, index) => {
        if (indexBook === index) {
          books.splice(index, 1);
        }
        library = books;
        localStorage.setItem('library', JSON.stringify(library));
      });
      element.parentElement.remove();
    }
  }
}

class Storage {

}

class Library {

}

document.addEventListener('DOMContentLoaded', () => {
  Book.displayBooks();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    Book.createBook(book);
    Book.setBook(book);
    form.reset();
  }
});

bookContainer.addEventListener('click', (e) => {
  Book.removeBook(e.target);
});
