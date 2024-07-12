const myLibrary = [];
let id = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  id++;
  this.info = function() {
    let readStatus;
    if (read) {
      readStatus = "have already read";
    } else {
      readStatus = "not read yet";
    }
    return '${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}';
  }
  this.toggleRead = function() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  const cardGrid = document.querySelector(".cards");
  while (cardGrid.firstChild) {
    cardGrid.removeChild(cardGrid.lastChild);
  }
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

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("#submitBtn");

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});



submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const title = dialog.querySelector("#title");
  const author = dialog.querySelector("#author");
  const pages = dialog.querySelector("#pages");
  const read = dialog.querySelector("#read");
  
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayLibrary();
  
  dialog.close();
});

addBookToLibrary("Bob's Cook", "Bob", 522, true);
addBookToLibrary("You're Mom Cook", "Bob", 521, false);
addBookToLibrary("Bob's Cook", "Bob", 522, true);

displayLibrary();
