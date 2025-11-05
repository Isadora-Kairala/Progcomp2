let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0
let aprovados = 0
let par = 0
vetor.forEach ( function (nota, posicao) { // nota é o elemento atual da iteração e posicao é o indice, posicao da iteração
    soma = soma + nota
    if (nota >= 7) {
        aprovados++
    }
    if (posicao %2 == 0) {
        par.push(nota)
    }
})
console.log (`Soma: `, soma)
console.log (`Média: `, soma/10)
console.log (`Pares: ${par}`)
console.log (`Aprovados: ${aprovados} `)