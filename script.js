class Library {
  constructor() {
    this.myLibrary = [];
  }

  addBook(book) {
    this.myLibrary.push(book);
  }

  displayLibrary() {
    const cardGrid = document.querySelector(".cards");
    while (cardGrid.firstChild) {
      cardGrid.removeChild(cardGrid.lastChild);
    }
    for (let i = 0; i < this.myLibrary.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("div");
      title.textContent = "Title: " + this.myLibrary[i].title;
      card.appendChild(title);

      const author = document.createElement("div");
      author.textContent = "Author: " + this.myLibrary[i].author;
      card.appendChild(author);

      const pages = document.createElement("div");
      pages.textContent = "Pages: " + this.myLibrary[i].pages;
      card.appendChild(pages);

      const readLine = document.createElement("div");
      readLine.classList.add('readLine');
      const read = document.createElement("div");
      read.textContent = "Read: ";

      const readBtn = document.createElement("button");
      readBtn.classList.add("readBtn");
      readBtn.setAttribute("data-index", i);
      if (this.myLibrary[i].read) {
        readBtn.textContent = "Y";
      } else {
        readBtn.textContent = "N";
      }
      readLine.appendChild(read);
      readLine.appendChild(readBtn);

      card.appendChild(readLine);

      const btn = document.createElement("button");
      btn.classList.add("remove");
      btn.textContent = "x";
      btn.setAttribute("data-index", i);
      card.appendChild(btn);

      cardGrid.appendChild(card);
    }
  }
}

class Book {
  static id = 0;

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Book.id;
    Book.id++;
  }

  info() {
    let readStatus;
    if (read) {
      readStatus = "have already read";
    } else {
      readStatus = "not read yet";
    }
    return '${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}';
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class interactionController {
  constructor() {
    this.dialog = document.querySelector("dialog");
    this.newBookButton = document.querySelector("dialog + button");
    this.submitButton = document.querySelector("#submitBtn");
  }

  setupEventListeners() {
    this.newBookButton.addEventListener("click", () => {
      this.dialog.showModal();
    });

    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
    
      const title = this.dialog.querySelector("#title");
      const author = this.dialog.querySelector("#author");
      const pages = this.dialog.querySelector("#pages");
      const read = this.dialog.querySelector("#read");
      
      library.addBook(new Book(title.value, author.value, pages.value, read.checked));
      library.displayLibrary();
    
      this.dialog.close();
    });

    document.addEventListener('click', someListener);

    function someListener(event) {
      const element = event.target;
      if (element.classList.contains("remove")) {
        library.myLibrary.splice(element.getAttribute("data-index"), 1);
        library.displayLibrary();
      }
      if (element.classList.contains("readBtn")) {
        library.myLibrary[element.getAttribute("data-index")].toggleRead();
        library.displayLibrary();
      }
    }
  }
}

let library = new Library();
let controller = new interactionController();
controller.setupEventListeners();

library.addBook(new Book("Bob's Cook Book", "Bob", 22, true));
library.addBook(new Book("Hunger Games", "Suzanne Collins", 221, false));
library.addBook(new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 522, true));

library.displayLibrary();
