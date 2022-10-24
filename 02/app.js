const botao = document.getElementById('botao')/* o evento é adicionado ao botão na forma de função cujo o primeiro dos parâmetros é o 'click', seguido pela função desejada*/
const paragrafo = document.getElementById('paragrafo')/*Será necessário retornar para o corpo do parágrafo por meio do innerHtml*/
botao.addEventListener('click', ()  => {
    const nome = document.getElementById('nome').value/*o ".value" me permite acessar o valor do elemento com id nome */
    const mensagemOla = () => `Olá, ${nome}!`;/*Retorno implícito, caso utilize as chaves, utilize a palavra o 'return'*/
    const retorno = mensagemOla(nome);
    paragrafo.innerHTML = retorno;
});