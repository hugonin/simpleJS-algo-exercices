/*
 * Ecrire un programme qui simulera une calculatrice
 * et demande à l'utilisateur de saisir un premier opérande, un opérateur et un second opérande.​
 * Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, multiplication et division selon l'opérateur saisi
 */

/*
let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un 1er opérande: ");
let op = readlineSync.question("Entrez un opérateur (ajouter, soustraire, multiplier, diviser): ");
let n2 = readlineSync.questionInt("Entrez un 2nd opérande: ");
*/
function ajouter(num1, num2) {
  return num1 + num2;
}

function soustraire(num1, num2) {
  return num1 - num2;
}

function multiplier(num1, num2) {
  return num1 * num2;
}

function diviser(num1, num2) {
  return num1 / num2;
}

function calculatrice(num1, num2, operateur) {
  return operateur(num1, num2);
}

console.log(calculatrice(2,15,ajouter))