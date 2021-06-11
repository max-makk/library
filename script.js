const showForm = document.querySelector(".show-form");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector(".add-book");

const titleBook = document.querySelector("#title");
const authorBook = document.querySelector("#author");
const pagesBook = document.querySelector("#pages");
const readBook = document.querySelector("#read");

const container = document.querySelector(".container");

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
  const book = new Book(
    titleBook.value,
    authorBook.value,
    pagesBook.value,
    readBook.checked
  );
  myLibrary.push(book);
  displaLibrary();
}

function displaLibrary() {
  const removeList = document.querySelectorAll("li");
  removeList.forEach((el) => container.removeChild(el));
  for (let i = 0; i < myLibrary.length; i++) {
    generateItem(myLibrary[i]);
  }
}

function generateItem(item) {
  const readSymbol = function () {
    let str;
    if (item.read) {
      str = "&#x2713;";
    } else {
      str = "&#x2717;";
    }
    return str;
  };
  const buttonText = function () {
    let str;
    if (item.read) {
      str = "NOT READ YET";
    } else {
      str = "READ";
    }
    return str;
  };
  const li = document.createElement("li");
  const table = document.createElement("table");
  li.appendChild(table);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  const trTitle = document.createElement("tr");
  tbody.appendChild(trTitle);
  const thTitle = document.createElement("th");
  thTitle.textContent = "Title";
  trTitle.appendChild(thTitle);
  const tdTitle = document.createElement("td");
  tdTitle.textContent = item.title;
  trTitle.appendChild(tdTitle);
  const trAuthor = document.createElement("tr");
  tbody.appendChild(trAuthor);
  const thAuthor = document.createElement("th");
  thAuthor.textContent = "Author";
  trAuthor.appendChild(thAuthor);
  const tdAuthor = document.createElement("td");
  tdAuthor.textContent = item.author;
  trAuthor.appendChild(tdAuthor);
  const trPages = document.createElement("tr");
  tbody.appendChild(trPages);
  const thPages = document.createElement("th");
  thPages.textContent = "Pages";
  trPages.appendChild(thPages);
  const tdPages = document.createElement("td");
  tdPages.textContent = item.pages;
  trPages.appendChild(tdPages);
  const trRead = document.createElement("tr");
  tbody.appendChild(trRead);
  const thRead = document.createElement("th");
  thRead.textContent = "Read";
  trRead.appendChild(thRead);
  const tdRead = document.createElement("td");
  tdRead.innerHTML = readSymbol();
  trRead.appendChild(tdRead);
  const div = document.createElement("div");
  div.setAttribute("class", "book-buttons");
  const buttonLeft = document.createElement("button");
  buttonLeft.textContent = buttonText();
  const buttonRight = document.createElement("button");
  buttonRight.textContent = "DELETE";
  div.appendChild(buttonLeft);
  div.appendChild(buttonRight);
  li.appendChild(div);

  buttonLeft.addEventListener("click", function () {
    if (item.read) {
      item.read = false;
      displaLibrary();
    } else {
      item.read = true;
      displaLibrary();
    }
  });

  buttonRight.addEventListener("click", function () {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    displaLibrary();
  });

  container.appendChild(li);
}

// ***********************************************  Buttons

addBook.addEventListener("click", (e) => {
  e.preventDefault();

  addBookToLibrary();

  titleBook.value = "";
  authorBook.value = "";
  pagesBook.value = "";
  readBook.checked = false;
  form.classList.toggle("closed");
  overlay.classList.toggle("closed");
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

localStorage.setItem(myLibrary);
