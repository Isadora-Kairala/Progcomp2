/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// 1. Número total de figurinhas
let N = parseInt(lines[0]);

// 2. Quantidade de figurinhas compradas
let M = parseInt(lines[1]);

// 3. Lista para guardar figurinhas diferentes
let figurinhas = [];

// 4. Ler cada figurinha comprada
for (let i = 2; i < 2 + M; i++) {
    let figurinha = parseInt(lines[i]);

    // Só adiciona se ainda não estiver na lista
    if (!figurinhas.includes(figurinha)) {
        figurinhas.push(figurinha);
    }
}

// 5. Calcular quantas faltam
let faltam = N - figurinhas.length;

// 6. Mostrar resultado
console.log(faltam);



let novas = new set();
novas.add(1);
novas.add(2); // só permite colocar elementos novos, e não o que ja existem, por exemplo, o 1
novas.size // 2     
*/

//let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let input = "10\n3\n5\n8\n3";
var lines = input.split('\n');

let total = parseInt(lines[0]);   // N = total de figurinhas
let pacote = parseInt(lines[1]);  // M = quantidade de figurinhas compradas

let nova = new Set();             // conjunto para evitar repetidas

for (let i = 2; i < 2 + pacote; i++) {
    nova.add(parseInt(lines[i])); // adiciona cada figurinha comprada
}

let faltam = total - nova.size;   // total - quantas diferentes já temos
console.log(faltam);


