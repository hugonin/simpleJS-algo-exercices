/*
* Vous disposez d'une liste de nombre.​
* Triez la liste du plus petit au plus grand
*/

const listeNombres = [12,25,5,7,6,-5]

function compareNombres(n1,n2) {
    return n1 - n2
}

console.log("Liste triée: " + listeNombres.sort(compareNombres))

