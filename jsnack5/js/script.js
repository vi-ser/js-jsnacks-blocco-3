/*
Snack 5 - Bonus:
Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
*/

const inputStringEl = document.querySelector("#input-string");
const outputStringEl = document.querySelector("#output");
const buttonUppercaseEl = document.querySelector("#button-uppercase");


buttonUppercaseEl.addEventListener("click",
    function () {
        // al click rendo maiuscole le iniziali di ogni parola
        uppercaseString(inputStringEl.value);
    })

function uppercaseString(string) {

    // trasformo la stringa in un array di caratteri
    let chars = string.split('');
    let upperString = "";

    for (let i = 0; i < chars.length; i++) {

        // controllo se è il primo carattere o se il carattere precedente è uno spazio
        if (i === 0 || chars[i - 1] === " ") {

            // converto il carattere corrente in maiuscolo e lo aggiungo alla nuova stringa
            upperString += chars[i].toUpperCase();

        } else {
            // aggiungo il carattere corrente senza modificarlo alla nuova stringa
            upperString += chars[i];
        }

    }

    // Mostro nel DOM la nuova stringa
    outputStringEl.innerHTML = upperString;
}