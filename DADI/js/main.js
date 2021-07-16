// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero casuale da 1 a 6 da assegnare al Computer
var cpuDice = Math.floor((Math.random() *6) + 1);
console.log(cpuDice);
document.getElementById("cpu").innerHTML = (cpuDice);

// Genero un numero casuale da 1 a 6 da assegnare al Player
var playerDice = Math.floor((Math.random() *6) + 1);
console.log(playerDice);
document.getElementById("player").innerHTML = (playerDice);

// Creo la condizione per assegnare la vittoria a chi riceve un numero più alto.
if (cpuDice > playerDice)
{
    console.log("Il Computer Vince!");
    document.getElementById("winner").innerHTML = "CPU";
}
else if (cpuDice < playerDice)
{
    console.log("Il Player Vince!");
    document.getElementById("winner").innerHTML = "Player";
}
else
{
    console.log("Pareggio!");
    document.getElementById("winner").innerHTML = "Pareggio";
}
