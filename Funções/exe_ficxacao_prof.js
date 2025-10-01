    function leitura(vet){
        return ["Joao", "Maria", "Alan", "Carla", "Julio"];
    }


    function maiuscula(vet){
        for(let i = 0; i < vet.length; i++){
            vet[i] = vet[i].toUpperCase()
        }

    }

    function sub(vet){
    for(let i = 0; i < vet.length; i++){
        if( vet[i].slice(0, 1) == "A"){
            vet[i] = "ANÔNIMO"
        }
    }
    }

    function main(){
        let nomes = leitura();
        console.log(nomes)
        maiuscula(nomes);
        console.log(nomes)
        sub(nomes);
        console.log(nomes)
    }
    main()
