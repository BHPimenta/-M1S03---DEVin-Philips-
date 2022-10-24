const verificaPalindromo = (palavra)=>{
    let aux='';
    for(let i=0; i<palavra.length;i++)
        if(palavra[i]!=palavra[palavra.length-i-1]){
            return false;
        }
    return true;    
}
const teste1 = verificaPalindromo("ana");
console.log(teste1)

const teste2 = verificaPalindromo("julia");
console.log(teste2)