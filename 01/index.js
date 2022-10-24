const numerico = [20,10, 30];
maior= numerico[0];
menor = numerico[0];

const procuraMinMax = numerico.forEach(numero => {
    if(numero>maior){
        maior = numero
    }
    if(numero<menor){
        menor = numero
    }
});

if(maior!=undefined){
    console.log(`O maior número do array é ${maior} e o menor é ${menor}`)
}

else{
    console.log("Não é possível encontrar")
}