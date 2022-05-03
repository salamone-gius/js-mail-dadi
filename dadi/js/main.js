                // - TASK - \\
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

            // --- SOLUTION --- \\

// 0. seleziono gli elementi HTML che mi servono e li salvo in variabili;
let winner = document.querySelector("div.winner");
let btn = document.querySelector("button.btn");
let userScore = document.querySelector("div.user.score");
let pcScore = document.querySelector("div.pc.score");

// al click su btn:
btn.addEventListener("click",
    function () {
        // 1. genero un numero intero randomico tra 1 e 6 per l'utente, lo salvo in una variabile e lo stampo sull'HTML;
        let userRandom = Math.floor(Math.random() * 6) + 1;
        userScore.innerHTML = userRandom;
        // 2. genero un numero intero randomico tra 1 e 6 per il PC, lo salvo in una variabile e lo stampo sull'HTML;
        let pcRandom = Math.floor(Math.random() * 6) + 1;
        pcScore.innerHTML = pcRandom;
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
    }
);
