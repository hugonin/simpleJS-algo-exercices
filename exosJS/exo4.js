/*
 * Ecrire un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.​
 */

let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un 1er nombre: ");
let n2 = readlineSync.questionInt("Entrez un second nombre: ");
let n3 = readlineSync.questionInt("Entrez un troisième nombre: ");


function plusGrandDesNombres(num1, num2, num3) {
    let max = 0;
    let nombres = [num1, num2, num3];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] > max) {
            max = nombres[i];
        }
    }
    return max;
}

console.log("Le plus grand des nombres est: " + plusGrandDesNombres(n1,n2,n3))
