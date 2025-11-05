/*
a) Calcular e exibir o valor total de vendas por categoria (valor × quantidade).
b) Identificar a categoria com maior valor de vendas total.

Exibir o nome da categoria campeã e o total de vendas dela.
*/


let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];
let somaInfo = 0
let somaModa = 0
let somaEdu = 0


console.log(`Total de vendas por categoria :`)
vendas.forEach(function(produtos){
    if(produtos.categoria === "Informática"){
        somaInfo += produtos.valor * produtos.quantidade
    }
    else if(produtos.categoria === "Moda" ){
        somaModa += produtos.valor * produtos.quantidade
    }
    else if(produtos.categoria === "Educação"){
        somaEdu += produtos.valor * produtos.quantidade 
    }

})
console.log(`Informática: R$ ${somaInfo.toFixed(2)}`)
console.log(`Moda: R$ ${somaModa.toFixed(2)}`)
console.log(`Educação: R$ ${somaEdu.toFixed(2)}`)

let categoriaCampea = ""
let maiorValor = 0

if (somaInfo > maiorValor) {
  maiorValor = somaInfo
  categoriaCampea = "Informática"
}

if (somaModa > maiorValor) {
  maiorValor = somaModa
  categoriaCampea = "Moda"
}

if (somaEdu > maiorValor) {
  maiorValor = somaEdu
  categoriaCampea = "Educação"
}

console.log(`Categoria campeã: ${categoriaCampea}`)
console.log(`Total de vendas: R$ ${maiorValor.toFixed(2)}`)
