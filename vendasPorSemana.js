let matriz = [];
let somaTotal = 0;
let somaVenda = 0;
let maior = matriz[0][0];
let imaior = 0;
let jmaior = 0;
let posicaoMaior = { linha: 0, coluna: 0 };
let somaDia = 0;
let vendedores = [];
let nomes = [];


for(let i = 0; i < 4; i++){
    matriz[i] = [];
    nomes[i] = prompt(`Insira o nome do vendedor :`)
    for(let j = 0; j < 7; j++){
        matriz[i][j] = parseInt(Math.random()*100)
    }
}
console.log(matriz)

//somar por venda
for(let i = 0; i< 4; i++){//percorre vendedores
    somaVenda = 0;       // entra novo vendedor 
    for(let j = 0; j < 7; j++){ //dias da semana
        somaVenda += matriz[i][j];
       
    }
    console.log(` Vendedor ${nomes[i]} vendeu ${somaVenda}`)
}

// soma por dia
for(let i = 0; i < 7; i++){ //para cada dia
    somaDia = 0;
    for(let j = 0; j < 4; j++){ // para cada vendedor
        somaDia += matriz[i][j];

    }
    console.log(` A venda do dia ${ i +1 } é : ${somaDia}`)
}


//calcular a maior e a posição 
for(let  i = 0; i<4;i++){
    for(let j = 0; j<7; j++){
        if( matriz[i][j] > maior){
            maior =  matriz[i][j];
            imaior = i;
            jmaior = j;
        }
    }
}

console.log(`A maior venda foi : ${ maior} na posição [${imaior}] [${jmaior}]`)

//media
let somaMedia = 0;
for(let i=0;i<4;i++){
    for(let j=0;j<7;j++){
        somaMedia += matriz[i][j];
    }
}
console.log(` A média das vendas é ${ somaMedia / (4*7)}`)