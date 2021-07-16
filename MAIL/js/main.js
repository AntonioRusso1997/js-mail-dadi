// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//----------------------------------------------------------//

// Creo un array contenente le email che possono effettuare l'accesso al sito.
var whiteList = ["pippobaudo@gmail.com", "gerryscotti@live.com", "donaldtrump@gov.com", "boolean@libero.it"];
console.log(whiteList);

// Chiedo all'utente di inserire la propria email
var email = prompt("Inserisci la tua email.");
console.log(email);

// Verifico se l'email inserita è nella White List. Se presente l'esito sarà positivo, altrimenti no.

if (whiteList.includes(email))
{
    alert("Welcome back!");
}
else
{
    alert("ERRORE! RIPROVA CON UN'ALTRA EMAIL!");
}