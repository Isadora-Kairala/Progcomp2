var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseInt(lines[0])
B = parseInt(lines[1])
PROD = A * B
console.log(`PROD = ${PROD}`)