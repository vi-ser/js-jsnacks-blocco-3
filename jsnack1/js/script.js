/*
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata
*/


// console.log(invertString("Ciao come stai?"));


function invertString(string) {
    let newString = "";
    for (let i = string.length - 1; i > -1; i--) {
        newString += string[i];
    }
    return newString;
}