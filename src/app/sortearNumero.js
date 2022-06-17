
const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1 )
}

console.log(numeroSecreto)
//Pegando os elementos do HTML
const elementoMenorValor =  document.getElementById('menor-valor');
const elementoMaiorValor =  document.getElementById('maior-valor');

elementoMaiorValor.innerText = maiorValor;
elementoMenorValor.innerHTML = menorValor;

