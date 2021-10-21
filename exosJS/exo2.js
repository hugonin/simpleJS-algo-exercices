/*
* Ecrire un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
* L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.
*/

let readlineSync = require('readline-sync');

let num1 = readlineSync.questionInt('Entrez un 1er nombre: ');
let num2 = readlineSync.questionInt('Entrez un second nombre: ');

console.log((num1 + num2))