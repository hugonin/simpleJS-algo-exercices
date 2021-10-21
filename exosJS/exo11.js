/*
 * Écrivez un programme qui demande à l'utilisateur de saisir un nombre décimal.​
 * Le programme doit renvoyer exactement le nombre de billets et de pièces qu'il faut pour obtenir ce nombre
 */

let readlineSync = require("readline-sync");

let somme = readlineSync.questionFloat("Entrez une somme: ");

const listeMonnaie = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.02, 0.01];
let renduMonnaie = [];

for (let i = 0; i < listeMonnaie.length; i++) {
  renduMonnaie[i] = parseInt(somme / listeMonnaie[i]);
  somme = somme - renduMonnaie[i] * listeMonnaie[i];
}

console.log(renduMonnaie);
console.log(
  "Billet de 500€: " +
    renduMonnaie[0] +
    " \n" +
    "Billet de 200€: " +
    renduMonnaie[1] +
    " \n" +
    "Billet de 100€: " +
    renduMonnaie[2] +
    " \n" +
    "Billet de 50€: " +
    renduMonnaie[3] +
    " \n" +
    "Billet de 10€: " +
    renduMonnaie[4] +
    " \n" +
    "Billet de 5€: " +
    renduMonnaie[5] +
    " \n" +
    "Pièce de 2€: " +
    renduMonnaie[6] +
    " \n" +
    "Pièce de 1€: " +
    renduMonnaie[7] +
    " \n" +
    "Pièce de 0,50€: " +
    renduMonnaie[8] +
    " \n" +
    "Pièce de 0,20€: " +
    renduMonnaie[9] +
    "\n" +
    "Pièce de 0,10€: " +
    renduMonnaie[10] 

);
