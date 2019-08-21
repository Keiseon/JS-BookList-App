// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Jim Screechy",
        isbn: "4747447"
      },

      {
        title: "Book Two",
        author: "Don Hammer",
        isbn: "9857447"
      },
      {
        title: "Book Three",
        author: "Miguel Patterson",
        isbn: "6475895"
      }
    ];

    const books = StoredBooks;

    // this adds the book to the list in the page
    books.forEach(book => UI.addBookToList(book));
  }

  // Add the book to the list
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    // create a table row <tr> in the table in the DOM
    const row = document.createElement("tr");

    // add columns for the data about the books, using back Ticks
    row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href="#" class= "btn btn-danger btn-sm delete" >X</a></td>
    `;

    // append that table row to the list in the DOM
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handles Storage

// Event: Display Books
// the way to trigger the UI event to put those hard-coded books in ths list is as follows:
// DOMContentLoaded means when the page loads
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", e => {
  // Prevent Actual Submit
  e.preventDefault();
  // Get the form values from the DOM
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate All Fields
  if (title === "" || author === "" || isbn === "") {
    alert("Please Fill in All Fields:");
  } else {
    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Add Book to the UI
    UI.addBookToList(book);

    // Clear Fields
    UI.clearFields();
  }
});

// Event: Remove a Book
// Use Event Propagation
document.querySelector("#book-list").addEventListener("click", e => {
  UI.deleteBook(e.target);
});
