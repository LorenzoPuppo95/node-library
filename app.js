import { question } from 'readline-sync';
import Library from './model/Library.js';
import User from "./model/user.js";
import { PhysicalBook, EBook } from "./model/book.js";

const library = new Library('Berio');
let id = library.users.length;  // Initialize id based on existing users
console.log(`Benvenuti in super library manager 4.2\n\n`);

while(true){
    const introString = "Ecco le funzionalita':\n" +
    "1) Aggiungi utente\n" +
    "2) Aggiungi libro\n" +
    "3) Lista utenti\n" +
    "4) Lista libri\n" +
    "5) Richiedi libro\n" +
    "6) Restituisci libro\n" +
    "7) Esci\n" +
    "Inserisci il numero della funzionalita' desiderata\n\n";

    const answer = question(introString);

    switch (answer) {
        case '1':
            console.log('Aggiungi utente\n\n');
            addUser();
            break;
        case '2':
            console.log('Aggiungi libro\n\n');
            addBook();
            break;
        case '3':
            console.log('Lista utenti\n\n');
            listUsers();
            break;
        case '4':
            console.log('Lista libri\n\n');
            listBooks();
            break;
        case '5':
            console.log('Richiedi libro\n\n');
            borrowBook();
            break;
        case '6':
            console.log('Restituisci libro\n\n');
            returnBook();
            break;
        case '7':
            console.log('Esci\n\n');
            process.exit(0);  // Properly exit the application
        default:
            console.log('Non hai capito un cazzo, riprova.\n\n');
    }
}

function addUser(){
    const name = question('Inserisci il nome utente: ');
    const user = new User(id++, name);  // Increment ID correctly for each new user
    library.addUser(user);
    console.log(`Utente ${name} aggiunto con successo!\n\n`);
}

function addBook(){
    const bookISBN = question(`Inserisci il codice ISBN del libro: `);
    const bookTitle = question(`Inserisci il titolo del libro: `);
    const bookAuthor = question(`Inserisci l'autore del libro: `);

    while (true) {
        const condition = question(`Il libro e' fisico o digitale? `);
        switch (condition) {
            case `fisico`:
                const shelfLocation = question(`Inserisci la sua posizione nello scaffale: `);
                const physicalBook = new PhysicalBook(bookISBN, bookTitle, bookAuthor, shelfLocation);
                library.addBook(physicalBook);
                console.log(`Il libro fisico e' stato aggiunto con successo!`);
                return;
            case `digitale`:
                const fileFormat = question(`Inserisci il formato dell'e-book: `);
                const eBook = new EBook(bookISBN, bookTitle, bookAuthor, fileFormat);
                library.addBook(eBook);
                console.log(`L'e-book e' stato aggiunto con successo!`);
                return;
            default:
                console.log(`Scelta non valida!`);
        }
    }
}

function listUsers(){
    if (library.users.length === 0) {
        console.log('Nessun utente presente.\n\n');
    } else {
        library.listUsers();
    }
}

function listBooks(){
    if (library.books.length === 0) {
        console.log('Nessun libro presente.\n\n');
    } else {
        library.listBooks();
    }
}

function borrowBook(){
    const userID = parseInt(question(`Inserisci l'ID dell'utente che desidera prendere in prestito un libro: `));

    const userIndex = library.users.findIndex(user => user.id === userID);

    if (userIndex !== -1) {
        const user = library.users[userIndex];

        const questionBookISBN = `Inserisci l'ISBN del libro che desidera prendere in prestito: `;
        const bookISBN = question(questionBookISBN);

        const bookIndex = library.books.findIndex(book => book.isbn === bookISBN);

        if (bookIndex !== -1) {
            const book = library.books[bookIndex];
            if (library.isBookAvailable(bookISBN)) {
                library.borrowBook(user, book);
                console.log(`Il libro è stato prestato!`);
            } else {
                console.log(`Il libro non è disponibile per il prestito!`);
            }
        } else {
            console.log(`Il libro non e' disponibile in catalogo!`);
        }
    } else {
        console.log(`L'utente non e' presente in archivio!`);
    }
}

function returnBook(){
    const questionUserID = `Inserisci l'ID dell'utente che desidera ritornare dal prestito un libro: `;
    const userID = parseInt(question(questionUserID));

    const userIndex = library.users.findIndex(user => user.id === userID);

    if (userIndex !== -1) {
        const user = library.users[userIndex];

        const questionBookISBN = `Inserisci l'ISBN del libro che desidera ritornare dal prestito: `;
        const bookISBN = question(questionBookISBN);

        const bookIndex = library.books.findIndex(book => book.isbn === bookISBN);

        if (bookIndex !== -1) {
            const book = library.books[bookIndex];
            library.returnBook(user, book);
            console.log(`Il libro è stato restituito!`);
        } else {
            console.log(`Nessuna corrispondeza trovata!`);
        }
    } else {
        console.log(`L'utente non e' presente in archivio!`);
    }
}