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

const book1 = new Book("The sound and the fury", "W.Falknuer", "200", true);

const book2 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book3 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book4 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book5 = new Book("The sound and the fury", "W.Falknuer", "200", false);

const book6 = new Book("The sound and the fury", "W.Falknuer", "200", false);

myLibrary.push(book1, book2, book3, book4, book5, book6);
console.dir(myLibrary);
