


    function maiuscula(v){
    for(let i = 0; i < 5; i++){
        console.log(v[i].toUpperCase());
    }
    }

    function subtituicao(v){
        for(let i = 0; i < 5; i++){
            if (v[i].charAt(0).toUpperCase() === "A"){
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

    