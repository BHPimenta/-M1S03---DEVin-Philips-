const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};

const {nome:nome1, idade:idade1, profissao:profissao1} = pessoa;/*retirada dos atributos nome, idade e profissao por meio
do destructuring (note a presença de chaves do lado esquerdo do sinal de atribuição e sem nome de variável), e renomeando
para nome1 ,idade1, profissao1*/

const mensagem = (nome, idade, profissao)=>{
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`
}

console.log(mensagem(nome1, idade1, profissao1))// passado os atributos que foram fragmentados