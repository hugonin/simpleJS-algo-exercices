/*
* Ecrire un programme qui demande à l'utilisateur de saisir son nom et 
* de lui afficher son nom avec le message de bienvenu.
*/

let readlineSync = require('readline-sync');

let userName = readlineSync.question('Quel est votre nom ');
console.log('Hello ' + userName + '!');