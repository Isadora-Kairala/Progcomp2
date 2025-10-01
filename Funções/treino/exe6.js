//Exercício 6 – Arrays por referência + retorno

/*Crie uma função chamada filtrarNumerosPares que receba um array de números e retorne um novo array contendo apenas os números pares.
No programa principal, peça ao usuário 5 números, armazene em um array, chame a função e mostre o array filtrado.
*/

function filtarNumsPares(vetor,){
    let pares = [];
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            pares.push(vetor[i])
        }
    }
    return pares;
}


function main(){
    let numeros = [];

    for(let i = 0; i < 5; i++){
        numeros[i] = Number(prompt(`insira um numero inteiro: `))
    }

    let pares = filtarNumsPares(numeros);

    console.log("Array original:", numeros);
    console.log("Somente pares:", pares);
}
main()