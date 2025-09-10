    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    let lines = input.split(/\s+/);
    let i = 0;
    while( i< lines.length){
        let X = parseInt(lines[i++]); //altura placa empresa
        let Y = parseInt(lines[i++]); //larura placa empresa
        let P = parseInt(lines[i++]); //quantas placas
        for(let j = 0; j < P; j++){
            let Xi = parseInt(lines[i++]); // altura da placa usuario 
            let Yi = parseInt(lines[i++]); //  largura da placa usuario
            if((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)){
            console.log('Sim')
            
            } else { 
                console.log('Nao')
            }
           
        }
    }