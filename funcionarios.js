    let funcionarios = [];

    for(let i = 0; i < 6; i++){
        let objeto = {
        nome: prompt(`Informe o seu nome :`),
        cargo: prompt(`Informe o  seu cargo:`).toLowerCase(),
        salario: Number(prompt(`Informe o seu salario:`)),
        tempoServico: Number(prompt(`Informe o seu tempo de serviço: `))
        }
        funcionarios.push(objeto);
    }
    let soma = 0
    let gerente = 0
    let gerentes = []
    for(let i = 0; i < 6 ; i++){
    if(funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5 ){
        console.log(`o funcionário com salario maior que R$ 5.000 e mais de 5 anos de serviço é : ${funcionarios[i].nome}`)
    }
    if(funcionarios[i].salario > funcionarios[0].salario){
        console.log(`O funcionario com maior salário é : ${funcionarios[i].nome}`)
    }
    soma += funcionarios[i].salario;

    if(funcionarios[i].cargo === "gerente" ){
    gerente++;
    gerentes.push(funcionarios[i].nome);
    }
    }
    let media = soma / funcionarios.length
    console.log(` A média é ${media}`)
    console.log(` Existem ${gerente} Gerentes, que são : ${gerentes}`)