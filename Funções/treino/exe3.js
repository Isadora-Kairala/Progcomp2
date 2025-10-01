//Exercício 3 Função com parâmetro por referência e sem retorno

/*Crie uma função chamada adicionarItem que receba uma lista (array) e um item (string).
A função deve adicionar esse item na lista.
Depois, mostre no console a lista antes e depois da função ser chamada.

*/

function adicionarItem(lista, item){
    lista.push(item) // insere no final do vetor sem mudar os outros elementos, aqui está apenas adicionando
}

function main(){
    let compras = ["suco", "arroz", "milho", "carne"]
    console.log("Antes: ", compras)

    adicionarItem(compras, "sabão")

    console.log("Depois: ", compras)
}
main()