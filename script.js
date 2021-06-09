const showForm = document.querySelector(".show-form");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector(".add-book");

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  let readStatus;
  if (this.read) {
    readStatus = "read";
  } else if (this.read === false) {
    readStatus = "not read yet";
  }
  return (
    this.title +
    " by " +
    this.author +
    ", " +
    this.pages +
    ", pages, " +
    readStatus
  );
};

function addBookToLibrary() {
  // do stuff here
}

function displaLibrary() {
  myLibrary.forEach((el) => {
    console.log(el);
  });
}

const container = document.querySelector(".container");

function generateItem() {
  for (let i = 0; i < 4; i++) {
    const li = document.createElement("li");
    const table = document.createElement("table");
    li.appendChild(table);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const th = document.createElement("th");
    tr.appendChild(th);
    const td = document.createElement("td");
    tr.appendChild(td);
    const trAuthor = document.createElement("tr");
    tbody.appendChild(trAuthor);
    const thAuthor = document.createElement("th");
    trAuthor.appendChild(thAuthor);
    const tdAuthor = document.createElement("td");
    trAuthor.appendChild(tdAuthor);

    container.appendChild(li);
  }
}

console.log(generateItem());

const book1 = new Book("The sound and the fury", "W.Falknuer", "200", true);

const book2 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book3 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book4 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book5 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book6 = new Book("The sound and the fury", "W.Falknuer", "200", false);

myLibrary.push(book1, book2, book3, book4, book5, book6);
console.dir(myLibrary);

// ***********************************************  Buttons

addBook.addEventListener("click", (e) => {
  e.preventDefault();
});

showForm.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("closed");
  overlay.classList.toggle("closed");
});

overlay.addEventListener("click", () => {
  form.classList.toggle("closed");
  overlay.classList.toggle("closed");
});

displaLibrary();
