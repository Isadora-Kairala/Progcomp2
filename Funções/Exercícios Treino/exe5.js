//Exercício 5 – Alterando objetos (por referência, sem retorno)

/* Crie uma função chamada atualizarSaldo que receba um objeto conta com as propriedades:

titular (string)

saldo (número)

A função deve receber também um valor (positivo ou negativo) e alterar o saldo diretamente dentro do objeto.
No programa principal, mostre o saldo antes e depois da atualização.
*/

function atualizarSaldo(conta, valor){
    conta.saldo += valor;

}

function main(){
    let contA = { titular: "João", saldo: 1000};
    console.log("Antes: ", contA);
    atualizarSaldo(contA, -300)
    console.log("Depois: ", contA)

}
main()