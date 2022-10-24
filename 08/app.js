const uneDobraRetorna = (vetor, ...rest)=>{
    let aux=vetor;
    rest.forEach((numero)=>{
        aux.push(numero*2);
    })
return aux;
}


const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
console.log(r1) 

const r2 = uneDobraRetorna([2], 10, 4, 8) 
console.log(r2) 

const r3 = uneDobraRetorna([6, 8]) 
console.log(r3) 