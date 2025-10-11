function cadastroInicial(veiculos){
  veiculos.push(
    { marca: "Toyota", nome: "Corolla", modelo: "Sedan", placa: "SDFD585", km: 0, consumo: 0 },
    { marca: "Fiat", nome: "Argo", modelo: "Hatch",placa: "ASDF147", km: 1000, consumo: 1700 },
    { marca: "Hyundai", nome: "Creta", modelo: "SUV", placa: "WEFG753", km: 78522, consumo: 5469 },
  );
}

function cadastrarNovoVeiculo(veiculos){
  let novoVeiculo = {
    marca: prompt(`Digite a marca do veículo:`),
    nome: prompt(`Digite o nome do veículo`),
    modelo: prompt(`Digite o modelo do veículo:`),
    placa: prompt(`Digite a placa:`),
    km: prompt(`Digite os km:`),
    consumo: prompt(`Digite o consumo:`)
  };

  veiculos.push(novoVeiculo);
}

function listarVeiculos(veiculos){
//Exiba no console o modelo, placa, km e consumo de cada veículo.
}

function atualizarQuilometragem(veiculos){
//Peça a placa de um veículo e a nova quilometragem. Atualize o valor no vetor.
}

function removerVeiculo(veiculos){
//Remova um veículo informando a placa.
}

function calcularMediaFrota(veiculos){
//Mostre a média geral de consumo (km/l) de todos os veículos.
}

function veiculoEconomico(veiculos){
//Exiba o modelo e o consumo do veículo com maior eficiência (maior km/l).
}

function main(){
  let vetor = [];
  cadastroInicial(vetor);

  // fazer o switch:
  let opcao
  do{
    opcao = Number(` Digite:\n 1-Cadastrar novo Veículo\n 2-Listar Veículos\n 3-`)
    switch(opcao){
    case 1: cadastrarNovoVeiculo(vetor); break;
    case 2: listarVeiculos(vetor); break;
    case 7: alert('Programa encerrando'); break;
    default: alert('Opção inválida'); break;

    }
  }while(opcao != 7)

}