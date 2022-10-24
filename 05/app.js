const somaTudo = (...rest)=>{
    let aux=0;
    for(let i=0; i<rest.length; i++){
        aux=aux+rest[i];
    }
    return aux;
}


const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);