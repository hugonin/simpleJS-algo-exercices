/*
 * Ecrire un programme qui demande à l'utilisateur de saisir un nombre "N".​
 * Calculer la somme de tous les nombres entre 1 et N
 */

let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un nombre: ");

const nombres = [1];
nombres.push(n1)
const somme = nombres.reduce( function(acc,valeurActuelle)  {
    return acc + valeurActuelle
})

console.log(nombres)
console.log(somme)



