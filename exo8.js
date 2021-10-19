/*
 * Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.​
 */

let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un nombre: ");

function genererPyramide(nombre) {
    let lignes = " ";

    for (let i = 1; i <= nombre; i++) {
        console.log(lignes += "*")
    }
}

genererPyramide(n1)



