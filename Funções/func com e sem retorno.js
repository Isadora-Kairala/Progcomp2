//função com retorno e sem retorno

function mostrarDobro(numero){
    console.log("o dobro do numero " + numero + " é : " + (numero * 2));

}


function calcularQuadrado(x){
    return x * x ;


}


function main(){


let numero = Number(prompt(`Insira um número inteiro:`));

mostrarDobro(numero);

let resultado = calcularQuadrado(numero)
console.log(" O quadrado do numero  " + numero + " é :" + resultado);
}

main()