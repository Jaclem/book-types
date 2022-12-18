const table = document.getElementById('table');
const addNew = document.getElementById('add-new');
const addBtn = document.getElementById('add-btn');
const exitBtn = document.getElementById('close');
const newEntry = document.getElementById('new-entry');
const modalBackground = document.getElementById('modal-background');

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
function addBookToLibrary() {
    let bookObj = Object.values(Book);

    if(Book.title == '' || Book.author == '' || Book.pages == ''){
        const required = document.getElementById('required');
        required.innerText = "All fields are required";
        required.style.color = "red";
    }
    else {
        newEntry.classList.remove('visibility');
        tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        for(let i = 0; i < bookObj.length; i++){
            tableData = document.createElement('td');
            tableData.innerText = bookObj[i];
            tableRow.appendChild(tableData);
        }
        createTrashBtn();
    }
}

// creates a new book object and adds it to myLibrary array
function createBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pageInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    Book.title = titleInput.value;
    Book.author = authorInput.value;
    Book.pages = pageInput.value;
    Book.read = readInput.value;

    myLibrary.push(Book);
    addBookToLibrary();
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
});

exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newEntry.classList.remove('visibility');
});







