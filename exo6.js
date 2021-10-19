/*
 * Ecrire un programme qui simulera une calculatrice
 * et demande à l'utilisateur de saisir un premier opérande, un opérateur et un second opérande.​
 * Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, multiplication et division selon l'opérateur saisi
 */


let readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Entrez un 1er opérande: ");
let op = readlineSync.question("Entrez un opérateur (ajouter, soustraire, multiplier, diviser): ");
let n2 = readlineSync.questionInt("Entrez un 2nd opérande: ");

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


if (op == "ajouter") {
  console.log(calculatrice(n1,n2,ajouter))

} else if (op == "soustraire") {
  console.log(calculatrice(n1,n2,soustraire))

} else if (op == "multiplier") {
  console.log(calculatrice(n1,n2,multiplier))

} else if (op == "diviser") {
  console.log(calculatrice(n1,n2,diviser))

}




