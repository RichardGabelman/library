const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let readStatus;
    if (read) {
      readStatus = "have already read";
    } else {
      readStatus = "not read yet";
    }
    return '${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}';
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  myLibrary.forEach(book => book.info());
}