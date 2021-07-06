/* eslint-disable import/extensions */
import library from "../main";
export default class Storage {
    static getBooks() {
    if (localStorage.getItem('library')) {
      library = JSON.parse(localStorage.getItem('library'));
    } else {
      library = [];
    }
    return library;
  }
  
  static setBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    library = books;
    localStorage.setItem('library', JSON.stringify(books));
  }
}
/* eslint-enable import/extensions */