  function matriz(){

    
  let matriz = [];

    for(let i=0; i<3 ; i++){

        matriz[i] = [];

        for(let j=0; j<3; j++){

            matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i}][${j}] :`)); 
        }
    }

    //console.log(matriz[1][2]) //[1] linha [2] coluna


    //somar
    let soma  = 0;

    for(let i=0; i< matriz.length; i++){
        for(let j=0; j < matriz[i].length; j++){

            soma += matriz[i][j];

        }
    }
    console.log(" Soma total :", soma);


    //numeros pares
    let pares = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0){
                pares++
        };
        }
    }
    console.log(`A quantidade de números pares é: ${pares}`)


    //diagonal
    let diagonalSecundaria = [];
    let n = matriz.length;

    for (let i = 0; i < matriz.length; i++) {
        diagonalSecundaria.push(matriz[i][n - 1 - i])
    }

    console.log(`Os valores da Diagonal Secundária são: ${diagonalSecundaria}`)

  }
