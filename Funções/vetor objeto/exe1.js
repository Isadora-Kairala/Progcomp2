function listarNomes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome)
    }
}

function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1
    }
}


function cadastroInicial(alunos){
 alunos.push(
    { nome: "Ana", idade: 20, curso: "ES" },
    { nome: "Carlos", idade: 22, curso: "Engenharia" },
    { nome: "Beatriz", idade: 19, curso: "Medicina" }
);

}

function cadastroNovo(alunos){
    let nome = prompt(`Digite o nome do aluno para o cadastro novo:`)
    let idade = prompt(`Digite a idade do aluno para o cadastro novo:`)
    let curso = prompt(`Digite o curso do aluno para o cadastro novo:`)
    alunos.push({ nome, idade, curso });
}

function  removeAluno(alunos, nome){
    for(let i=0; i < alunos.length; i++){
        if(alunos[i].nome == nome){
            alunos.splice(i, 1)
            console.log(`Novo vetor:`)
            for (let i = 0; i < alunos.length; i++) {
                console.log(alunos[i].nome)
            }
            return
        }

    }
}

function main(){
    let vetor = [];
    cadastroInicial(vetor) //cadastro inicial
    let opcao
    do{ 
        opcao = Number((prompt(`Digite\n 1. cria aluno\n  2. lista nome\n  3. Atualiza idade\n  4. Remove aluno\n  5. Sair\n`)))
        switch(opcao){
            case 1: cadastroNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: let nomeRemove = prompt(`Informe o nome do aluno para remover :`)
                    removeAluno(vetor, nomeRemove); break
            case 5: alert('Programa encerrando'); break;
            default: alert('Opção inválida'); break;
        }
    }
    while(opcao != 4);
    console.log(vetor)


}
main()