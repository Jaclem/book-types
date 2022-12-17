const table = document.getElementById('table');
const addNew = document.getElementById('add-new');
const addBtn = document.getElementById('add-btn');
const exitBtn = document.getElementById('exit-btn');
const newEntry = document.getElementById('new-entry');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageInput = document.getElementById('pages');
const readInput = document.getElementById('read');


let myLibrary = [];
let tableRow;
let tableData;

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// then checks to see if inputs are blank and lets user know they are required if true
// finally adds myLibrary array items to the page
function addBookToLibrary(title, author, pages, read) {

    if(title == '' || author == '' || pages == ''){
        const required = document.getElementById('required');
        required.innerText = "All fields are required";
        required.style.color = "red";
    }
    else {
        newEntry.classList.remove('visibility');

        for(let i = 0; i < myLibrary.length; i++){
            tableRow = document.createElement('tr');
            table.appendChild(tableRow); 
        };

        const bookArr = [`${title}`, `${author}`, `${pages}`, `${read}`];
        
        bookArr.forEach(list => {
            tableData = document.createElement('td');
            tableData.innerText = list;
            tableRow.appendChild(tableData);
        });

        createTrashBtn();
    }
}

// creates a new book object and adds it to myLibrary array
function createBook() {
    const books = Object.create(Book);

    books.title = titleInput.value;
    books.author = authorInput.value;
    books.pages = pageInput.value;
    books.read = readInput.value;

    myLibrary.push(books);

    addBookToLibrary(books.title, books.author, books.pages, books.read);
}

function createTrashBtn() {
    // Creates a trash button on the end of every list item
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-button');
    tableRow.appendChild(trashBtn);
    let testNum;

    // checks which element was clicked and deletes it from the page
    // also removes the element from myLibrary array
    trashBtn.addEventListener('click', (e) => {
        for(let i = 0; i < myLibrary.length; i++){
            testNum = i;
            let tRow = e.path[1];
            tRow.remove();
        }
        myLibrary.splice(testNum, 1);
    });
}


// Event Listeners

addNew.addEventListener('click', (e)=> {
    e.preventDefault();
    newEntry.classList.add('visibility');
});

addBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    createBook();
    // addBookToLibrary();
});

exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newEntry.classList.remove('visibility');
});







