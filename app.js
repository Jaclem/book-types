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

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// creates a new book object and adds it to myLibrary array
// then checks to see if inputs are blank and lets user know they are required if true
// finally adds myLibrary array items to the page
function addBookToLibrary() {
    const books = Object.create(Book);

    books.title = titleInput.value;
    books.author = authorInput.value;
    books.pages = pageInput.value;
    books.read = readInput.value;

    myLibrary.push(books);
    let tableRow;

    if(books.title == '' || books.author == '' || books.pages == ''){
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

        const bookArr = [`${books.title}`, `${books.author}`, `${books.pages}`, `${books.read}`];
        
        bookArr.forEach(list => {
            const tableData = document.createElement('td');
            tableData.innerText = list;
            tableRow.appendChild(tableData);
        });
    }
}

// Event Listeners

addNew.addEventListener('click', (e)=> {
    e.preventDefault();
    newEntry.classList.add('visibility');
});

addBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    addBookToLibrary();
});

exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newEntry.classList.remove('visibility');
});






