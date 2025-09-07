var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0]);
let horas = parseInt(lines[1]);
let custoHora = parseFloat(lines[2]);
let salario = custoHora * horas;
console.log(`NUMBER = ${numero}\nSALARY = U$ ${salario.toFixed(2)}`);