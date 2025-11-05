// Vetor com as notas de 10 estudantes
let notas = [8.5, 6.0, 9.0, 7.5, 5.0, 10.0, 4.5, 8.0, 7.0, 6.5];

// Variáveis auxiliares
let soma = 0;
let aprovados = 0;

// a) Exibir todas as notas
console.log("Todas as notas:");
notas.forEach(function(nota) {
    console.log(nota);
});

// b) Calcular a soma das notas
notas.forEach(function(nota) {
    soma += nota;
});

console.log("\nSoma das notas:", soma);

// c) Calcular e exibir a média das notas
let media = soma / notas.length;
console.log("Média das notas:", media.toFixed(2));

// d) Informar quantos alunos foram aprovados (nota ≥ 7)
notas.forEach(function(nota) {
    if (nota >= 7) {
        aprovados++;
    }
});
console.log("Quantidade de alunos aprovados:", aprovados);

// e) Exibir as notas nas posições pares do vetor
console.log("\nNotas nas posições pares:");
notas.forEach(function(nota, indice) {
    if (indice % 2 === 0) {
        console.log(`Posição ${indice}: ${nota}`);
    }
});
