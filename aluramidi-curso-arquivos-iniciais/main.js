const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom(idSom) {
    audio = document.querySelector(`#som_${idSom}`);
    audio.currentTime = 0;
    document.querySelector(`#som_${idSom}`).play();
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    tecla.onclick = function () {
        tocarSom(instrumento);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    };
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
}
