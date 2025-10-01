//Exercício 1 – Função com parâmetro e sem retorno
/* Crie uma função chamada mostrarMensagem que receba um nome como parâmetro e exiba no console:
"Seja bem-vindo, [nome]!".
Depois, chame a função passando dois nomes diferentes. */

function mostrarMensagem(nome){
    console.log("Seja bem-vindo(a), " + nome);

}

function main(){
    let nominho = prompt("insira seu nome :");
    mostrarMensagem(nominho);
}
main()