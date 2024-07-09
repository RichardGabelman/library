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
  const cardGrid = document.querySelector(".cards");
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.textContent = "Title: " + myLibrary[i].title;
    card.appendChild(title);

    const author = document.createElement("div");
    author.textContent = "Author: " + myLibrary[i].author;
    card.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = "Pages: " + myLibrary[i].pages;
    card.appendChild(pages);

    const read = document.createElement("div");
    let readStatus;
    if (myLibrary[i].read) {
      readStatus = "✓";
    } else {
      readStatus = "X";
    }
    read.textContent = "Read: " + readStatus;
    card.appendChild(read);

    cardGrid.appendChild(card);
  }
}

addBookToLibrary("Bob's Cook", "Bob", 522, true);
addBookToLibrary("Bob's Cook", "Bob", 522, true);
addBookToLibrary("Bob's Cook", "Bob", 522, true);

displayLibrary();