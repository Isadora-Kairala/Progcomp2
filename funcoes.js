//Funções Strings

let  frase = "    hoje, pra variar, foi um dia corrido";
frase.trim() // 'hoje, pra variar, foi um dia corrido'
//nao tira os espaços do meio, só tira espaços do começo e fim

let resumo = "hoje foi um dia com muitas atividades tensas";
resumo.length // 44
resumo.split(" ") //(8) ['hoje', 'foi', 'um', 'dia', 'com', 'muitas', 'atividades', 'tensas']
resumo.split(" ").length // 8

let aprovados = "joao,josé,pedro,lucas,carlos,rafaela,monica";
let vetApro = aprovados.split(",");
vetApro // (7) ['joao', 'josé', 'pedro', 'lucas', 'carlos', 'rafaela', 'monica']

let beecrowd = "4\n9\n13";
beecrowd.split("\n") // (3) ['4', '9', '13']


let vet1 = [1, 2, 3]
vet1.join(".") // '1.2.3'


//para transformar uma palavra em vetor : split
let texto = "palavra"
let vet = texto.split("") //  p.a.l.a.v.r.a 

//para tranformar em string novamente : join
vet.join("") // "palavra"