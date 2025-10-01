


    function maiuscula(v){
    for(let i = 0; i < 5; i++){
        console.log(v[i].toUpperCase());// errado, nao tem como colocar no console log
    }
    }

    function subtituicao(v){
        for(let i = 0; i < 5; i++){
            if (v[i].charAt(0).toUpperCase() === "A"){ // tem como usar slice, e outro parametro parecido com matriz
                v[i] = "ANÔNIMO"
            }
        }
    }

    function main(){
        let vetor = [];
        for(let i = 0; i < 5; i++){
            vetor[i] = prompt("Insira o nome dos cinco alunos").toUpperCase();
        }
        

        console.log("antes :")
        console.log(vetor)

        maiuscula(vetor)
        console.log("depois maiusculas :")
        console.log(vetor)

        subtituicao(vetor)
        console.log("depois sub: ")
        console.log(vetor)

    }
    main()

