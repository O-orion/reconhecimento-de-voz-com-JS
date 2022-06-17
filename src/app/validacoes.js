
function verificarSeENumero(numero_falado){
    const numero =+ numero_falado

    if(verificarSeNaoEUmNumero(numero)){
        console.log("Não é um número!")
        elementChute.innerHTML += `<div>Valor inválido! Por-favor, informe um número.</div>`
        return 
    }

    if(maiorOuMenor(numero)){
       elementChute.innerHTML += `<div>O número informado não está entre ${menorValor} a ${maiorValor}</div>`
       return
    }


    regrasDoJogo(numero);
}

function verificarSeNaoEUmNumero(numero){
    return Number.isNaN(numero)
}


function maiorOuMenor(numero){
    return   numero > maiorValor || numero < menorValor
}

function regrasDoJogo(chute){

    if(numeroSecreto == chute){
        document.body.innerHTML = `
            <h2>Você acertou !</h2>
            <h3> O número secreto erá: ${numeroSecreto}</h3>

            <button class="btn-jogar" id="jogar-novamente"  >JOGAR NOVAMENTE</button>
        `

        return 
    }

    if(chute > numeroSecreto){
        elementChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }


}


//capturando o clcik no corpo da aplicação, e estamos verificando se o alvo clicado tem o id igual a 'jogar-novamente'.
document.body.addEventListener('click', e => {
    if(e.target.id == "jogar-novamente"){
        //Windown.location.reload(), recarregar a nova página.
        window.location.reload()
    }
})

