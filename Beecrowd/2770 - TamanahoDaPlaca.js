var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// índice para percorrer as linhas
let i = 0;

// enquanto ainda houver linhas para ler
while (i < lines.length) {
    // 1. Ler dimensões da placa da empresa e M
    let [X, Y, M] = lines[i].split(' ').map(Number);
    i++;

    // 2. Processar cada pedido
    for (let j = 0; j < M; j++) {
        let [Xi, Yi] = lines[i].split(' ').map(Number);
        i++;

        // 3. Verificar se cabe (normal ou girado)
        if ((Xi <= X && Yi <= Y) || (Yi <= X && Xi <= Y)) {
            console.log("Sim");
        } else {
            console.log("Nao");
        }
    }
}
