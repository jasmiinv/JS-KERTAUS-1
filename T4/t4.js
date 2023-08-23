'use strict';

const score = prompt('Anna pisteiden tulos, jotta näet arvosanan');

let arvosana;

if (score >= 0 && score <= 39) {
  arvosana = 0;
} else if (score >= 40 && score <= 51) {
  arvosana = 1;
} else if (score >= 52 && score <= 63) {
  arvosana = 2;
} else if (score >= 64 && score <= 75) {
  arvosana = 3;
} else if (score >= 76 && score <= 87) {
  arvosana = 4;
} else if (score >= 88 && score <= 100) {
  arvosana = 5;
} else {
  arvosana = 'Invalid score';
}
document.getElementById('vastaus').innerHTML = arvosana;
