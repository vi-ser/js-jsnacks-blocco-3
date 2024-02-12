/*
Snack 4 - Bonus:
Scrivi una funzione che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
*/

const inputStringEl = document.querySelector("#input-string");
const outputStringEl = document.querySelector("#output");
const buttonSortEl = document.querySelector("#button-sort");


buttonSortEl.addEventListener("click",
    function () {
        // al click inverto la stringa inserita in input
        sortString(inputStringEl.value);
    })

function sortString(string) {
    // Trasformo la stringa in un array di caratteri
    let chars = string.split('');

    // Ordino l'array di caratteri
    chars.sort();

    // Ricostruisco la stringa ordinata
    let sortedString = chars.join('');

    // Mostro nel DOM la nuova stringa
    outputStringEl.innerHTML = sortedString;
}