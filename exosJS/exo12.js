/*
* Vous disposez d'une liste de températures (°C).​
* Parcourez cette liste et affichez la température la plus proche de 0°C. ​
* Si une température négative est aussi proche de 0 qu'une température positive, la valeur négative prend le dessus.​
​*
*/

const temperatures = [
  { degres: 12, estProcheDeZero: false },
  { degres: 25, estProcheDeZero: false },
  { degres: 5, estProcheDeZero: true },
  { degres: 7, estProcheDeZero: true },
  { degres: 6, estProcheDeZero: true },
  { degres: -5, estProcheDeZero: true },
];


temperatures.forEach((temperature) => {
  if (temperature.estProcheDeZero) {
    console.log(
      `La temperature la plus proche de zéro est ${temperature.degres}°C`
    );
  }
});


