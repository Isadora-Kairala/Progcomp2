/*
Enunciado:
Você possui um array com as idades de pessoas em um evento.

let idades = [12, 17, 25, 15, 34, 60, 8];
Tarefa:
Use filter() para criar um novo array apenas com as idades maiores ou iguais a 18 anos (consideradas adultas).

Resultado esperado:

[25, 34, 60]
*/

let idades = [12, 18, 25, 15, 34, 60, 8];

let maior18 = idades.filter(function(elemento, indice){
   return elemento >= 18
})

console.log(maior18)