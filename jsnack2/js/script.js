/*
Snack 2:
Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
*/
const firstArrayEl = document.querySelector("#first-array");
const secondArrayEl = document.querySelector("#second-array");
const outputEl = document.querySelector("#output");

const array1 = ["a", "b", "c"];
const array2 = ["1", "2", "3"];
let arrayMerged = [];

firstArrayEl.innerHTML = array1;
secondArrayEl.innerHTML = array2;

// assegno alla variabile il risultato della funzione merge
arrayMerged = merge(array1, array2);
console.log(arrayMerged);

outputEl.innerHTML = arrayMerged;

function merge(a, b) {

    // pusho l'i-esimo elemento di ogni array nel nuovo array
    for (let i = 0; i < a.length; i++) {
        arrayMerged.push(a[i]);
        arrayMerged.push(b[i]);
    }

    return arrayMerged;
}
