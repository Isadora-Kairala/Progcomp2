//Exercício 2 – Função com parâmetro por valor e com retorno
/* Crie uma função chamada calcularQuadrado que receba um número e retorne o valor ao quadrado.
Teste a função com pelo menos 3 números e mostre o resultado no console.

*/

function calculoQuadreido(x){
    return x * x 
}

function main(){
    let num = Number(prompt("Insira um numero inteiro : "))
    let result = calculoQuadreido(num)
    console.log(`O Quadrado do número ` + num + ` é : ` + result)
}
main()