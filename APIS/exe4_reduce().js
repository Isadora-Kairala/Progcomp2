/*
Enunciado:
Você tem um array com os valores de vendas de uma loja em um dia:

let vendas = [150, 300, 50, 450, 100];
Tarefa:
Use reduce() para calcular o total das vendas do dia.

Resultado esperado:

1050
*/

    let vendas = [150, 300, 50, 450, 100];

    let total = vendas.reduce(function(indice, elemento) {
    return indice + elemento
    }, 0) // 0 valor inicial do indice

    console.log(total)