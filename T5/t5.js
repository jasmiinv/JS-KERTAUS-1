'use strict';
// Prompt the user to enter a positive integer
const input = prompt('Syötä positiivinen kokonaisluku:');

// Parse the user's input and store it in a variable
const numero = parseInt(input);

let summa = 0;

// for loop
for (let i = 1; i <= numero; i++) {
  summa += i;
}
// print summa
document.getElementById('vastaus').innerHTML = summa;
