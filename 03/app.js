const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatena = (array1, array2)=>{
    return [...array1, ...array2];//concatenação com espalhamento/spread
}
console.log("Novo array: "+concatena(array1, array2));