                // - TASK - \\
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
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

const title = document.querySelector("h1.title");

alert("Benvenuta/o sul nostro Mail Validator");

// 1. chiedo all'utente la sua mail;
const userMail = prompt("Inserisci il tuo indirizzo e-mail");
console.log(userMail);
// 2. controllo che sia nella lista di chi può accedere;
// 2.1 creo una lista di email valide e la salvo dentro un ARRAY
const mailAllowed = ["samuele.madrigali@boolean.career", "nikolas.mosca@boolean.career", "marco.acciarri@boolean.career"];
console.log(mailAllowed);
// 2.2 effettuo un controllo tra l'input dell'utente e i dati dentro l'array
for (let i = 0; i < mailAllowed.length; i++) {
    // 3. stampo un messaggio appropriato in base all'esito del controllo.
    if (userMail === mailAllowed[i]) {
        title.innerText = "Accesso consentito";
    } else {
        title.innerText = "Accesso negato";
    }
}
