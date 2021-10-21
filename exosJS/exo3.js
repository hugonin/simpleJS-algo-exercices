/*
* ​Ecrire un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit
* et vérifier le profit ou la perte.​
* Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.
*/

let readlineSync = require('readline-sync');

let prixFabrication = readlineSync.questionInt('Entrez le prix de fabrication du produit: ');
let prixVente = readlineSync.questionInt('Entrez le prix de vente du produit: ');

if (prixFabrication > prixVente) {
    console.log("Désolé, il y a une perte de " + (prixFabrication - prixVente) + "€")
} else if (prixFabrication < prixVente) {
    console.log("Génial, il y a profit de " + (prixVente - prixFabrication) + "€")
}