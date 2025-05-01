export default class Negociacao {
    constructor(_data, _quantidade, _valor) {
        Object.defineProperty(this, "_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _data
        });
        Object.defineProperty(this, "_quantidade", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _quantidade
        });
        Object.defineProperty(this, "_valor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _valor
        });
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
