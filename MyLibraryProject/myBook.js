const myLibrary = [
  {
    title: "Five on a Treasure Island",
    author: "Enid Blyton",
    pages: 180,
    read: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    read: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: false,
  }
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  getInfo() {
    const readStatus = this.read ? "Read" : "Not Read";
    return "${this.name} by ${this.author}, ${this.pages} pages, ${readStatus}";
  }
}

function addBookToLibrary(title, author, pages, read) {
  // Hide the pop-up and backdrop
  const popup = document.querySelector("#popup");
  const backdrop = document.querySelector("#backdrop");
  popup.style.display = "none";
  backdrop.style.display = "none";

  // Create a new Book object
  const newBook = new Book(title, author, pages, read);

  // Check if the book already exists in the library
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === title && myLibrary[i].author === author) {
      alert("This book already exists in the library.");
      return;
    }
  }
}


