/*
 * Ecrire un programme pour un professeur flemmard.​
 * On dispose d'une liste de notes comprises entre 0 et 20​
 * Ecrire un commentaire pour chacune de ces copies d'élève
 */

let readlineSync = require("readline-sync");

let res = readlineSync.questionInt("Entrez une note entre 0 et 20: ");

const listeNotes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const res1 = listeNotes.filter((n) => {
  return n < 5;
});

const res2 = listeNotes.filter((n) => {
  return n >= 5 && n <= 10;
});

const res3 = listeNotes.filter((n) => {
  return n >= 11 && n <= 14;
});

const res4 = listeNotes.filter((n) => {
  return n >= 15 && n <= 17;
});

const res5 = listeNotes.filter((n) => {
  return n >= 18 && n <= 20;
});

if (res1.includes(res)) {
  console.log("Catastrophique, il faut tout revoir!");
} else if (res2.includes(res)) {
  console.log("Insuffisant");
} else if (res3.includes(res)) {
  console.log("Peut mieux faire!");
} else if (res4.includes(res)) {
  console.log("Bien");
} else if (res5.includes(res)) {
  console.log("Excellent, bon travail");
}
