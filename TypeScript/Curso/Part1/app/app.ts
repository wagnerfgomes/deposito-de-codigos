import NegociacaoController from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form: HTMLInputElement = document.querySelector(
    '.form'
) as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.adiciona();
});
