                // - TASK - \\
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

            // --- SOLUTION --- \\
// 1. genero un numero intero randomico tra 1 e 6 per l'utente e lo salvo in una variabile
let userRandom = Math.floor(Math.random() * 6) + 1;
console.log(userRandom);

// 2. genero un numero intero randomico tra 1 e 6 per il PC e lo salvo in una variabile
let pcRandom = Math.floor(Math.random() * 6) + 1;
console.log(pcRandom);

let winner = document.querySelector("div.winner");

// 3. in base a chi fa il punteggio più alto, stampo il vincitore
//SE il numero dell'utente è maggiore del numero del computer, ALLORA stampo "Hai vinto!!!";
if (userRandom > pcRandom) {
    winner.innerText = "Hai vinto!!!";
//ALTRIMENTI, SE il numero dell'utente è minore del numero del computer, ALLORA stampo "Hai parso...";
} else if (userRandom < pcRandom) {
    winner.innerText = "Hai perso...";
//ALTRIMENTI stampo "Pareggio";
} else {
    winner.innerText = "Pareggio";
}



