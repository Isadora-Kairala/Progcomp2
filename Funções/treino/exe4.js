//Exercício 4 – Função com múltiplos parâmetros (por valor, com retorno)

/*Crie uma função chamada calcularMedia que receba três notas (números) como parâmetros por valor, calcule a média aritmética e retorne o resultado.
No programa principal, peça ao usuário as três notas e mostre a média formatada no console.
*/

function calcularMedia(a,b,c){
    return (a + b + c) / 3
}

function main(){
    let nota1 = Number(prompt(`Ìnsira a sua nota 1:` )) 
    let nota2 = Number(prompt(`Ìnsira a sua nota 2:` )) 
    let nota3 = Number(prompt(`Ìnsira a sua nota 3:` )) 
    let result  = calcularMedia(nota1, nota2, nota3).toFixed(2)
    console.log("A média é " + result)
}
main()