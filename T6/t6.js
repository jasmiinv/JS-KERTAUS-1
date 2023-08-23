'use strict';
const userInput = prompt('Anna positivinen luku');

//

let num = parseInt(userInput);

// tarkistetaan onko numero positiivinen
if (num <= 0 || isNaN(num)) {
  alert('Ei negatiivisia luku, kiitos.');
} else {
  // Luo kertotaulukko käyttämällä sisäkkäisiä silmukoita
  let taulukko = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      taulukko += i * j + '\t';
    }
    taulukko += '\n';
  }

  document.getElementById('vastaus').innerHTML = '<pre>' + taulukko + '</pre>';
}
