function cadastroInicial(funcionarios){
    funcionarios.push(
       { nome: "Ana", cargo: "Gerente", salario: 5000 },
       { nome: "Carlos", cargo: "Auxiliar", salario: 2000 },
       { nome: "Beatriz", cargo: "Aprendiz", salario: 800 }
   );
    }


    
function cadastroNovo(funcionarios){
    let nome = prompt(`Digite o nome do funcionario para o cadastro novo:`)
    let cargo = prompt(`Digite o cargo para o cadastro novo:`)
    let salario = prompt(`Digite o salario para o cadastro novo:`)
    funcionarios.push({ nome, cargo, salario });
}

    function listarNomes(funcionarios) {
        for (let i = 0; i < funcionarios.length; i++) {
            console.log(funcionarios[i].nome, funcionarios[i].cargo, funcionarios[i].salario)
        }
    }

    function aumentarSalario(funcionarios) {
        for (let funcionario of funcionarios) {
            funcionario.salario = funcionario.salario * 1.1
        }
    }
    
    
    function buscarSalarioporNome(funcionarios, nome){
        for(let i = 0; i < funcionarios.length; i++){
           if(funcionarios[i].nome == nome){
              console.log(`O salário de ${funcionarios[i].nome} é : ${funcionarios[i].salario} `)
              return
           } 
        }
        console.log("Salário não encontrado!!")
    }


  function atualizarCargo(funcionarios, nome, cargo){
        for(let i = 0; i < funcionarios.length; i++){
            if (funcionarios[i].nome.toLowerCase() === nome.toLowerCase()){
                funcionarios[i].cargo = cargo
                return
            }
        
        }
        console.log("nao foi possivel atualizar o cargo!")
  }

    
   function  removeFunc(funcionarios, nome){
    for(let i=0; i < funcionarios.length; i++){
        if(funcionarios[i].nome == nome){
            funcionarios.splice(i, 1)
            console.log(`Novo vetor:`)
            for (let i = 0; i < funcionarios.length; i++) {
                console.log(funcionarios[i].nome)
            }
            return
        }
    }

}


function exibirMedia(funcionarios){
    let soma = 0
    for(let i=0; i<funcionarios.length; i++){
     soma = soma + funcionarios[i].salario
    }
    return soma/funcionarios.length
    
}


function promocao(funcionarios){
     exibirMedia(funcionarios)
    
}
    
function maiorSalário(funcionarios){

}
function main(){
    let vetor = [];
    cadastroInicial(vetor) //cadastro inicial
    let opcao
    do{ 
        opcao = Number((prompt(`Digite\n 1. Cadastrar novo funcionário \n  2. Listar todos os nomes dos funcionários\n  3. Aumentar o salário de todos em 10% \n  4. Buscar salário pelo nome\n  5. Atualizar cargo de um funcionário\n 6. Remover funcionário pelo nome\n 7. Exibir média salarial da empresa\n 8. Encerrar o programa\n`)))
        switch(opcao){
            case 1: cadastroNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarSalario(vetor); break;

            case 4: let salarioNome = prompt(`Informe o nome da pessoa para saber o salário :`)
            buscarSalarioporNome(vetor, salarioNome); break;

            case 5: let cargoNome = prompt(`Informe o nome da pessoa para atualizar o cargo:`) 
            let cargoNovo = prompt(`Informa o cargo novo da pessoa:`)
            atualizarCargo(vetor, cargoNome, cargoNovo); break;


            case 6: let nomeRemove = prompt(`Informe o nome  para remover :`)
             removeFunc(vetor, nomeRemove); break;
            case 7: let media = exibirMedia(vetor);
                   console.log(`a média é ${media}`); break;
            case 8: alert('Programa encerrando'); break;
            default: alert('Opção inválida'); break;
        }
    }
    while(opcao != 8);
    console.log(vetor)


}
main()