/*
* Adaptez l'exercice 8 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide​
*/


let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un nombre: ");

function genererPyramide(nombre) {
    let lignes = " ";

    for (let i = nombre; i => 1; i--) {
        console.log(lignes += " *")
    }
    for (let j = 1; j <= i ; j++) {
        console.log(lignes += " ")           
    }
}

genererPyramide(n1)
