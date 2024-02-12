/*
Snack 3:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).

- abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
- la nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
- la funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
- nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
[2, 3, 4]

*/
const firstArray = document.querySelector("#first-array");
const outputArray = document.querySelector("#output");

const numbers = [0, 1, 2, 3, 4, 5, 6];

const finalArray = arrayCut(numbers, 2, 4);

firstArray.innerHTML = numbers;
outputArray.innerHTML = finalArray;



function arrayCut(array, min, max) {

    if (min >= max || max >= array.length) {
        console.log("Le posizioni fornite non sono valide.");
    }

    else {
        // rimuovo gli elementi che escono fuori dal range
        const newArray = array.slice(min, max + 1);

        return newArray;
    }

}
