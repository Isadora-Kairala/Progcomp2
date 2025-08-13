let biblioteca = [];

for(let i = 0; i < 5; i++){
    let titulo =  prompt(` Informe o titulo do livro ${i + 1} :`);
    let autor =  prompt(`Informe o autor do livro ${i + 1}:`)
    let ano  = Number(prompt(`Informe o ano de publicação do livro ${i + 1}:`))
    let paginas = Number(prompt(` Informe a quantidade de paginas ${i + 1}:`))


    let livro = { 
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    };

    biblioteca.push(livro);
}


let soma = 0;
let maior = 0;

for(let i = 0; i < biblioteca.length; i++){
    if(biblioteca[i].paginas > 300){
        console.log(` O livro ${biblioteca[i].titulo} tem mais de 300 paginas`);
    }
    if(biblioteca[i].paginas > biblioteca[0].paginas){
        maior = biblioteca[i].titulo;
    }
    soma += biblioteca[i].paginas
}
let media = soma / biblioteca.length
console.log(`O título com mais paginas é ${maior}`)
console.log(`A média de paginas é ${media} `)