let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let displayBooks = [];
function Book(title,author) {
    this.title = title;
    this.author = author;
}

let book = new Book(title,author);

function addBook(book){
    displayBooks.push(book);
}

