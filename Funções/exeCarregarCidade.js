function carregarCidade(vet){
return ["São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba"]
}

function padronizarNomes(vet){
    for(let i = 0; i < vet.length; i++){
        vet[i] = vet[i].toUpperCase();
    }
}

function marcarInterior(vet){
for(let i = 0; i < vet.length; i++){
    if( vet[i].slice(0,1) == "C"){
        vet[i] = `INTERIOR - ${vet[i]}`
    }
}
}

function exibir(vet){
    console.log(vet)


}

function main(){
let lista = carregarCidade();
padronizarNomes(lista);
marcarInterior(lista);
exibir(lista);
}
main()
