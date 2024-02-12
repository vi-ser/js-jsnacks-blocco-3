/*
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata
*/
const inputStringEl = document.querySelector("#input-string");
const outputStringEl = document.querySelector("#output");
const buttonInvertEl = document.querySelector("#button-invert");


buttonInvertEl.addEventListener("click",
    function () {
        // al click inverto la stringa inserita in input
        invertString(inputStringEl.value);
    })

function invertString(string) {
    // inizializzo una nuova stringa vuota
    let newString = "";
    // aggiungo alla nuova stringa i caratteri partendo dall'ultimo
    for (let i = string.length - 1; i > -1; i--) {
        newString += string[i];
    }
    // mostro nel DOM la nuova stringa
    outputStringEl.innerHTML = newString;
}