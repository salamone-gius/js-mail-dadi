                // - TASK - \\
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

            // --- SOLUTION --- \\

const title = document.querySelector("h1.title");
const box = document.querySelector("div.box");

alert("Benvenuta/o sul nostro Mail Validator");

// 1. chiedo all'utente la sua mail;
const userMail = prompt("Inserisci il tuo indirizzo e-mail");
console.log(userMail);

// 2. controllo che sia nella lista di chi può accedere;
// 2.1 creo una lista di email valide e la salvo dentro un ARRAY
const mailAllowed = ["samuele.madrigali@boolean.career", "nikolas.mosca@boolean.career", "marco.acciarri@boolean.career"];
console.log(mailAllowed);
// 2.2 dichiaro delle variabili a cui assegnerò un valore successivamente
let validMail;
let invalidMail;
// 2.3 effettuo un controllo tra l'input dell'utente e i dati dentro l'array
for (let i = 0; i < mailAllowed.length; i++) {
    // 2.4 assegno il valore 
    if (userMail === mailAllowed[i]) {
        validMail = true;
    } else {
        invalidMail = false;
    }
}

box.style.display = "block";

// 3. stampo un messaggio appropriato in base all'esito del controllo.
if (validMail) {
    title.innerText = "accesso consentito";
    title.style.color = "green";
} else {
    title.innerText = "accesso negato";
    title.style.color ="red";
}

