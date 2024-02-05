function tocaSom (idAudio){
    document.querySelector(idAudio).play();
}

function pausaSom (idAudioMusica){
    document.querySelector(idAudioMusica).pause();
}

const listaBotoesPausar = document.querySelectorAll("#botaoParar");

const listaBotoesPlay = document.querySelectorAll("#botaoPlay");


for(let contador = 0; contador < listaBotoesPlay.length; contador++){

    const botaoAcionado = listaBotoesPlay[contador];
    const musica = botaoAcionado.classList[1];
    const idAudioEscolhido = `#som_${musica}`;

    botaoAcionado.onclick = function () {
        tocaSom(idAudioEscolhido);
    }
    
    const botoesAcionados = listaBotoesPausar[contador];
    const audio = botoesAcionados.classList[1];
    const idAudiosEscolhidos = `#som_${audio}`;

    botoesAcionados.onclick = function () {
        pausaSom(idAudiosEscolhidos);
    }

}