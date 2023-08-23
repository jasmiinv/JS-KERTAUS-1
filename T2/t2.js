'use strict';

const lukuX1 = prompt('Syötä ensimmäinen koordinaattipisteelle X');
const lukuY1 = prompt('Syötä ensimmäinen koordinaattipisteelle Y');
const lukuX2 = prompt('Syötä toinen koordinaattipisteelle X');
const lukuY2 = prompt('Syötä toinen koordinaattipisteelle Y');
const distance = Math.sqrt((lukuX2 - lukuX1)^2 + (lukuY2 - lukuY1)^2);

document.getElementById('vastaus').innerHTML = distance;
