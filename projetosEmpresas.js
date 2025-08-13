
    
let projeto = [];
let soma = 0;

for(let i = 0; i < 7; i++){
    let objeto = {
        nomeProjeto: prompt(`Informe o nome do projeto : ${i + 1} °`),
        empresa: prompt(`Informe o nome da empresa :${i + 1} °`).toLowerCase(),
        duracaoMeses: Number(prompt(`Informe a duração de meses :${i + 1} °`)),
        orcamento: Number(prompt(`Informe o valor do orçamento :${i + 1} ° `))
    }
    projeto.push(objeto);
}

let duracao12 = [];
let maior = projeto[0];
let inova = 0;
let somaOrca = 0

for(let i = 0; i < 7; i++){
    if(projeto[i].duracaoMeses > 12 && projeto[i].orcamento > 1000000){
        duracao12.push(projeto[i].nomeProjeto);
    }
    if(projeto[i].orcamento > maior.orcamento){
        maior = projeto[i];
    }
    if(projeto[i].empresa === "inovatech"){
     inova++
    }
    soma += projeto[i].duracaoMeses;
    if(projeto[i].duracaoMeses < 12){
        somaOrca += projeto[i].orcamento;
    }
}

let media = soma / projeto.length

console.log(` Os projetos com duração Superior a 12 meses e orçamento acima de R$ 1.000.000.00 são : ${duracao12}`);
console.log(` O projeto com maior orçamento é : ${maior.nomeProjeto}`);
console.log(` A média é : ${media}`)
console.log(` A quantidade de projetos realizados pela InovaTech são: ${inova}`);
console.log(` O gasto total com projetos de menos de 6 meses são : ${somaOrca}`)

