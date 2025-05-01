const html = document.querySelector('html');
const focoButao = document.querySelector('.app__card-button--foco');
const curtoButao = document.querySelector('.app__card-button--curto');
const longoButao = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaInput = document.querySelector('#alternar-musica');
const pngPause = document.querySelector('.app__card-primary-butto-icon');
const temporizador = document.querySelector('#timer');

const musica = new Audio('./sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioFinal = new Audio('./sons/beep.mp3');

const butoes = document.querySelectorAll('.app__card-button');
const butaoComecar = document.querySelector('#start-pause');
const butaoComecarOuPausar = document.querySelector('#start-pause span');
let tempodecorrido = 120;
let intervalo = null;

function alterarAtributos(contexto) {
    html.setAttribute('data-contexto', contexto);
    bannerImg.setAttribute('src', `./imagens/${contexto}.png`);
    butoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    mostrarTempo();
}

function alterarTitulo(contexto) {
    switch (contexto) {
        case 'foco':
            titulo.innerHTML =
                'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';

            break;
        case 'descanso-curto':
            titulo.innerHTML =
                'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            break;
        case 'descanso-longo':
            titulo.innerHTML =
                'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            break;
    }
}

function alteracoesGerais(contexto) {
    alterarAtributos(contexto);
    alterarTitulo(contexto);
}

focoButao.addEventListener('click', () => {
    tempodecorrido = 120;
    alteracoesGerais('foco');
    focoButao.classList.add('active');
});
curtoButao.addEventListener('click', () => {
    tempodecorrido = 60;
    alteracoesGerais('descanso-curto');
    curtoButao.classList.add('active');
});
longoButao.addEventListener('click', () => {
    tempodecorrido = 360;
    alteracoesGerais('descanso-longo');
    longoButao.classList.add('active');
});

musicaInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});
musica.loop = true;

const contagemRegressiva = () => {
    if (tempodecorrido <= 0) {
        //audioFinal.play()
        alert('Tempo Finalizado!');
        zerar();
        butaoComecarOuPausar.textContent = 'Começar';
        pngPause.setAttribute('src', './imagens/play_arrow.png');
        return;
    }
    tempodecorrido -= 1;
    mostrarTempo();
    console.log(tempodecorrido);
};

butaoComecar.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervalo) {
        zerar();
        audioPause.play();
        butaoComecarOuPausar.textContent = 'Começar';
        pngPause.setAttribute('src', './imagens/play_arrow.png');
        return;
    }
    intervalo = setInterval(contagemRegressiva, 1000);
    audioPlay.play();
    butaoComecarOuPausar.textContent = 'Pausar';
    pngPause.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervalo);
    intervalo = null;
}

function mostrarTempo() {
    const tempo = new Date(tempodecorrido * 1000);
    const tempoFormarado = tempo.toLocaleTimeString('pt-br', {
        minute: '2-digit',
        second: '2-digit',
    });
    temporizador.innerHTML = `${tempoFormarado}`;
}