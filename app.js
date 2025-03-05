var rl = require('readline-sync');

console.log(`Benvenuti in super library manager 4.2`);

while(true){
    const introString = "Ecco le funzionalità:\n" +
    "1) aggiungi utente\n" +
    "2) aggiungi libro\n" +
    "3) lista utenti\n" +
    "4) lista libri\n" +
    "5) esci\n" +
    "Inserisci il numero della funzionalita' desiderata\n"

    const answer = rl.question(introString);

    console.log('Ecco la risposta ' + answer);
}