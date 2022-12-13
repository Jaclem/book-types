const table = document.getElementById('table');
const addNew = document.getElementById('add-new');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const addBtn = document.getElementById('add-btn');
const exitBtn = document.getElementById('exit-btn');
const newEntry = document.getElementById('new-entry');

console.log(exitBtn);


let myLibrary = [
    {title: "poop", author: 'poopy', pages: '246', read: 'yes'},
    {title: "second", author: 'third', pages: '300', read: 'no'}
];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// Book.prototype.addRows = function() {

// }



function addBookToLibrary() {
    myLibrary.forEach(item => {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
    
        const bookArr = [`${item.title}`, `${item.author}`, `${item.pages}`, `${item.read}`];
        console.log(bookArr);
    
        bookArr.forEach(list => {
            const tableData = document.createElement('td');
            tableData.innerText = list;
            tableRow.appendChild(tableData);
    
    
            console.log(list);
        });
        
    });
}

addBookToLibrary();

function addItemsToList(n) {

    let books = {}
    for (let i = 0; i < n; ++i) {
        books[i] = new Book()
    }
    return books
}

// addItemsToList();

// addNew.addEventListener('click', ()=> {
//     newEntry.classList.add('visibility');
// });

// exitBtn.addEventListener('click', ()=> {
//     newEntry.classList.remove('visibility');
// });

// addBookToLibrary();





