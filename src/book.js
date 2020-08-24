var mainCharacter;
var book;

function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
}

function saveReview(reviewLeft, reviews) {
  if(!reviews.includes(reviewLeft)){
    reviews.push(reviewLeft)
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, mainCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre
  };
}

function editBook(book) {
  editedAmount = (book.title.length * 20)/4;
  book.pageCount = editedAmount * 3
  return book
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
