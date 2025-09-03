//verificar se uma palavra é palidromo ou não
//meu codigo:

let palidromo = prompt(`Insira a palavra para verificação :`)

let vet  = palidromo.split("")
console.log(vet)

let invertido = vet.reverse()
console.log(invertido)

let string = vet.join("")
console.log(string)

if(palidromo == string){
    console.log(`parabéns`)
}else{
    console.log(` vc falhou`)
}

//socorrammesubinoonibusemmarrocos


//codigo prof:

let palavra = prompt("Informe uma palavra")
// tira os espaços antes e depois
let limpa = palavra.trim()
// cria um vetor da palavra limpa
let vetor = limpa.split("")
// inverte palavra do tipo vetor
let invertida = vetor.reverse()
// converte vetor em string
let invertidaString = invertida.join("")

if (invertidaString === limpa){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas')
/*

let palavra = prompt("Informe uma palavra")
let invertida = palavra.trim().split("").reverse().join()

if (palavra.trim() === invertida){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas') */
