const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const mesclaObjetos=(objUM, objDois)=>({...objUM, ...objDois})/* forma de retorno de objeto em arrow function: ({...objUM, ...objDois})*/

const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);