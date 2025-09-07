var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let info1 = lines[0].split(' ');
let peca1 = parseInt(info1[0]);
let numpeca1 = parseInt(info1[1]);
let valorUn1 = parseFloat(info1[2]);

let info2 = lines[1].split(' ');
let peca2 = parseInt(info2[0]);
let numpeca2 = parseInt(info2[1]);
let valorUn2 = parseFloat(info2[2]);
let valor = (numpeca1 * valorUn1) + (numpeca2 * valorUn2);
console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);
