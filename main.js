const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.querySelector('#form');
const bookContainer = document.getElementById('book-container');
// const addBtn = document.getElementById('addBtn');
// let rmvBtn;

// console.log(addBtn);

const library = [];
function Book(title, author) {
  this.title = title;
  this.author = author;
}
// localStorage.setItem('books',library)

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
  // bookContainer.append(bookTitle,bookAuthor)
  bookDiv.append(bookAuthor);
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remv-cls';
  removeBtn.textContent = 'remove';
  bookDiv.append(removeBtn);
  bookContainer.append(bookDiv);
  // rmvBtn = document.querySelector('.remv-cls');
}

form.addEventListener('submit', (event) => {
  // ...
  // stop form submission
  event.preventDefault();
  const book = new Book(title.value, author.value);
  createBook(book);
  const obj = localStorage.setItem(book.title, JSON.stringify(book));
  addBook(obj);
  // console.log(createBook(book));
});

function removeBook(el) {
  if (el.classList.contains('remv-cls')) {
    el.parentElement.remove();
  }
}

bookContainer.addEventListener('click', (e) => {
  removeBook(e.target);
  // let index = displayBooks
  // if (e.target.classList.contains('remv-cls')) {
  //     let eachIndex = e.target.parentElement.rowIndex -l
  //     console.log(eachIetndex)
  //     // e.target.parentElement.remove()
  //     // //displayBooks(myLibrary[myLibrary.length-1])

  //     // myLibrary.forEach((book, index) => {
  //     //   if (index === eachIndex) {
  //     //     myLibrary.splice[eachIndex, 1]
  //     //   }
  //     // })
  //   }
});