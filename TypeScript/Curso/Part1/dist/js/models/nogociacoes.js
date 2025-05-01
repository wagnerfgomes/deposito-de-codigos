export default class Negociacoes {
    constructor() {
        Object.defineProperty(this, "negociacoes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
