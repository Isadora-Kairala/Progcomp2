let matriz = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaDiagonal = 0;
let somaSecundaria = 0;
let regioes = [];
let dias = [];
for(let i = 0; i < 5; i++){
    regioes.push(prompt(`Informe o nome da região : ${i+1}`))
}
for(let c = 0; c < 5; c++){
    dias.push(Number(prompt(` Informe o dia ${ c+1}: `)))
}

//linha = Região
for(let i = 0; i < 5; i++){
    matriz[i] = []; // cria vetor dentro do vetor
    // coluna = dia
    for(let c = 0; c < 5; c++){

        do { 
        matriz[i][c] = prompt(`Informe a poluição da região ${regioes[i]} no dia ${dias[c]}`)

           } while(matriz[i][c] < 0 || matriz[i][c] > 500);

}
}

// Diagonal principal
for(let i = 0; i < matriz.length; i++){
    diagonalPrincipal.push(matriz[i][i]);
    somaDiagonal += matriz[i][i]
}

let mediaDiagonal = somaDiagonal / diagonalPrincipal.length



// Diagonal secundaria
let n = matriz.length 
for(i = 0; i < matriz.length; i++){
   diagonalSecundaria.push(matriz[i][n - 1 - i]);
}

for(i=0;i < diagonalSecundaria.length; i++){
    somaSecundaria += diagonalSecundaria[i];
}

 let mediaSecundaria = somaSecundaria / diagonalSecundaria.length

    /* coluna = 3 - 1 - 0 = 2
   coluna = 3 - 1 - 1 = 1
   coluna = 3 - 1 - 2 = 0
    */

// calcular maior indice e em qual dia ocorreu :
let maior = matriz[0][0];
let diaIndice = 0;
let regiaoMaior = 0;
for(let i=0; i< 5; i++){
    for(let c=0;c<5;c++){
        if(matriz[i][c] > maior ){
            maior = matriz[i][c];
            diaIndice = c;
            regiaoMaior = i;
        }
    }
}

//calcular quantas vezes foi maior que 300

let maior300 = 0;
for(let i = 0; i < 5; i++){
    for(let c = 0; c < 5 ;c++){
      if(matriz[i][c] > 300){
        maior300++;
      }
    }
}


//Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias.

let regiaoMenor = 0;
let mediaMenor = 0;

for(let c = 0; c < 5; c++){ // calcula primeira linha separado pois vou supor q a primeira media é a menor
    mediaMenor += matriz[0][c]; 
}

   mediaMenor = mediaMenor / 5;

   for(let i = 0; i < 5; i++){
    let soma = 0;
       for(let c = 0; c < 5; c++){
        soma += matriz[i][c];
       }
       let media = soma / 5;

       if( media < mediaMenor){
        regiaoMenor = i;
       }
   }


   //mostrar matriz :
   for(let i = 0; i < 5; i++){
    console.log(`\n`)
      for(let c = 0; c < 5; c++){
        console.log(` ,${matriz[i][c]}`)
      }
   }


   console.log(`Os valores da diagonal principal são : ${diagonalPrincipal} e sua média é ${mediaDiagonal} `)
   console.log(`Os valores da diagonal secundaria são : ${diagonalSecundaria} e sua média é ${mediaSecundaria}`)
   console.log(`A região ${regiaoMaior} teve o maior índice de poluição registrado no dia ${diaIndice}`)
   console.log(`O índice foi superior a 300  ${maior300} vezes.`)
   console.log(`A região com menor indice de poluicção foi ${regiaoMenor}.`)
