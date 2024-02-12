/*
Snack 4 - Bonus:
Scrivi una funzione che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
*/

const inputStringEl = document.querySelector("#input-string");
const outputStringEl = document.querySelector("#output");
const buttonSortEl = document.querySelector("#button-sort");


buttonSortEl.addEventListener("click",
    function () {
        // al click ordino alfabeticamente la stringa
        sortString(inputStringEl.value);
    })

function sortString(string) {
    // trasformo la stringa in un array di caratteri
    let chars = string.split('');

    // ordino l'array di caratteri
    chars.sort();

    // ricostruisco la stringa ordinata
    let sortedString = chars.join('');

    // mostro nel DOM la nuova stringa
    outputStringEl.innerHTML = sortedString;
}