import { question } from 'readline-sync';
import Library from './model/Library.js'

const library = new Library('Berio');
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
            // Add your code to handle adding a user
            addUser();
            break;
        case '2':
            console.log('Aggiungi libro\n\n');
            // Add your code to handle adding a book
            addBook();
            break;
        case '3':
            console.log('Lista utenti\n\n');
            // Add your code to handle listing users
            listUsers();
            break;
        case '4':
            console.log('Lista libri\n\n');
            // Add your code to handle listing books
            listBooks();
            break;
        case '5':
            console.log('Richiedi libro\n\n');
            // Add your code to handle borrowing books
            borrowBook();
            break;
        case '6':
            console.log('Restituisci libro\n\n');
            // Add your code to handle returning books
            returnBook();
            break;
        case '7':
            console.log('Esci\n\n');
            // Exit the loop
            process.exit(0);
        default:
            console.log('Non hai capito un cazzo, riprova.\n\n');
    }
    
}

function addUser(){
    const name = question('Inserisci il nome utente: ');
    const id = question('Inserisci l\'id: ');

    const user = [name, id];
    library.addUser(user);

    console.log(`Utente ${name} aggiunto con successo!\n\n`);
}

function addBook(){
    
}

function listUsers(){
    
}

function listBooks(){
    
}

function borrowBook(){

}

function returnBook(){

}

