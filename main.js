const form = document.querySelector('#form');
const bookContainer = document.getElementById('book-container');

let  library = [];
function getBooks(){
  if (localStorage.getItem('library')) {
    library = JSON.parse(localStorage.getItem('library'))
  } else {
    library = []
  }
  return library
}

function setBook(book){
  const books = getBooks();
  books.push(book);
  library = books;
  localStorage.setItem('library',JSON.stringify(books));
}

function addBook(book) {
  library.push(book);
}

function createBook(book) {
  const bookDiv = document.createElement('div');
  bookDiv.innerHTML = `<p>${book.title} by ${book.author}</p>
                      <button class ='remv-cls'>Remove</button>`
  bookContainer.appendChild(bookDiv);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    const book = { title: `${title}`, author: `${author}` };
    createBook(book);
    setBook(book);
    form.reset();
  }
});

function removeBook(element) {
  const books = getBooks();
  const indexBook = Array.prototype.indexOf.call(
    bookContainer.childNodes,
    element.parentElement,
  );

  if (element.classList.contains('remv-cls')) {
    books.forEach((book,index) => {
      if(indexBook === index){
        books.splice(index,1)
      }
      library = books;
      localStorage.setItem('library', JSON.stringify(library));
    });
    element.parentElement.remove();
  }
}


bookContainer.addEventListener('click', (e) => {
  removeBook(e.target);
});

function displayBooks(){
  const data = getBooks();
  data.forEach(book => {
    createBook(book);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
