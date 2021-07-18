const tombolTambah = document.getElementById('addButton');
const stickyButton = document.getElementById('stickyAdd');
const modal = document.querySelector('#modal');
const cancelModal = document.getElementById('cancel');
const UNCOMPLETED_BOOK_ID = "unread";
const COMPLETED_BOOK_ID ="read";
const BOOK_ITEMID = "itemId";

function addBook() {
  const uncompletedBook = document.getElementById(UNCOMPLETED_BOOK_ID);
  const inputJudul = document.getElementById("title").value;
  const inputAuthor = document.getElementById("author").value;
  const inputTahun = document.getElementById("year").value;

  const book = makeBook(inputJudul, inputAuthor, inputTahun, false);
  const bookObject = composeBookObject(inputJudul, inputAuthor, inputTahun, false);
  
  book[BOOK_ITEMID] = bookObject.id;
  books.push(bookObject);

  uncompletedBook.append(book)
  updateDataToStorage();
}

function makeBook (title, author, year, isCompleted) {
  const image = document.createElement('img');
  image.setAttribute('src', 'assets/book.svg')

  const imageBook = document.createElement('div');
  imageBook.classList.add('image-book')
  imageBook.append(image)

  const bookTitle = document.createElement('h5');
  bookTitle.innerText = title;
  
  const authorName = document.createElement('p');
  authorName.innerText = author;
  
  const bookYear = document.createElement('small');
  bookYear.innerText = `${year}`;
  
  const detail = document.createElement('div');
  detail.classList.add('desc')
  detail.append(bookTitle, authorName, bookYear)
  
  const container = document.createElement('div');
  container.classList.add('detail-book')
  container.append(imageBook, detail)
  
  // container.append(createReadButton());

  if(isCompleted){
      container.append(createUndoButton(), createTrashButton());
  } else {
      container.append(createReadButton(), createTrashButton());
  }
  return container;
}

function createButton(buttonTypeClass , eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
      eventListener(event);
  });
  return button;
}

function createReadButton() {
  return createButton("readButton", function(event){
       addBookToCompleted(event.target.parentElement);
  });
}

function addBookToCompleted(bookElement) {
  const bookTitle = bookElement.querySelector(".desc > h5").innerText;
  const bookAuthor = bookElement.querySelector(".desc > p").innerText;
  const bookYear = bookElement.querySelector(".desc > small").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, true);
  const listCompleted = document.getElementById(COMPLETED_BOOK_ID);

  const book = findBook(bookElement[BOOK_ITEMID]);
  book.isCompleted = true;
  newBook[BOOK_ITEMID] = book.id;

  listCompleted.append(newBook);
  bookElement.remove();

  updateDataToStorage();
} 

function removeBookFromCompleted(bookElement) {
  const bookPosition = findBookIndex(bookElement[BOOK_ITEMID]);
  books.splice(bookPosition, 1);

  bookElement.remove();

  updateDataToStorage();
}

// function createTrashButton() {
//   return createButton("trashButton", function(event){
//       removeBookFromCompleted(event.target.parentElement);
//   });
// }

function createTrashButton() {
  return createButton("trashButton", function(event){
    let confirmasi;
    if (confirm("Yakin mau hapus ?")) {
      confirmasi = removeBookFromCompleted(event.target.parentElement);
    } 
  });
}

function undoBookFromCompleted(bookElement){
  const listUncompleted = document.getElementById(UNCOMPLETED_BOOK_ID);
  const bookTitle = bookElement.querySelector(".desc > h5").innerText;
  const bookAuthor = bookElement.querySelector(".desc > p").innerText;
  const bookYear = bookElement.querySelector(".desc > small").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);

  const book = findBook(bookElement[BOOK_ITEMID]);
  book.isCompleted = false;
  newBook[BOOK_ITEMID] = book.id;

  listUncompleted.append(newBook);
  bookElement.remove();

  updateDataToStorage();
}

function createUndoButton() {
  return createButton("unreadButton", function(event){
      undoBookFromCompleted(event.target.parentElement);
  });
}

tombolTambah.addEventListener("click", function () {
  modal.classList.toggle("modal-open")
})

cancelModal.addEventListener("click", function() {
  modal.style.transition = '1s';
  modal.classList.toggle("modal-open")
})

stickyButton.addEventListener("click", function () {
  modal.classList.toggle("modal-open")
})

// const list = document.querySelectorAll('.desc > h5');
// const searchBar = document.forms['search'].querySelector('input');
// searchBar.addEventListener ('keyup', function (e) {
//   const term = e.target.value.toLowerCase();
//   const books = document.querySelectorAll('h5');
//   Array.from(books).forEach(function(book) {
//     const title = book.firstElementChild;
//     if (title.toLowerCase().indexOf(term) != -1) {
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none' ;
//     }
//   })
// })

let listBuku = [];
const detailBuku = document.getElementsByClassName(".detail-book");
const searchTitle = document.querySelector('#search-bar');
searchTitle.addEventListener("keyup", searchBook);

function searchBook(e) {
  const findBook = e.target.value.toLowerCase();
  listBuku = document.querySelectorAll(".desc");
  // let listBook = localStorage.getItem(STORAGE_KEY);

  listBuku.forEach( function(item) {
    const isiitem = item.firstChild.textContent.toLowerCase();

    if (isiitem.indexOf(findBook) != -1){
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none;");
      const detailku = document.querySelector(".image-book");
      detailku.style.display =  "none !important;";
    }
  });

  // while ( listBuku.style.display = "block") {
  //   detailBuku.style.display = "block";
  // }

}