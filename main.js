let title = document.getElementById('title');
let author = document.getElementById('author');
let form = document.querySelector('#form');
let bookContainer = document.getElementById('book-container');
let addBtn = document.getElementById('addBtn');
let rmvBtn;

// console.log(addBtn);

let library = [];
function Book(title,author) {
    this.title = title;
    this.author = author;
}
//localStorage.setItem('books',library)


function addBook(book){
    library.push(book);
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
    let obj = localStorage.setItem(book.title,JSON.stringify(book));
    addBook(obj);
    // console.log(createBook(book));
});

function removeBook(el) {
  if (el.classList.contains('remv-cls')) {
    el.parentElement.remove();
  }

}

bookContainer.addEventListener('click', function(e) {
    removeBook(e.target)
    //let index = displayBooks
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
console.log(library);
function displayBooks () {
}