function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`;
    };
}

const Wagner = new User('Wagner', 'c@c.com');

console.log(Wagner.exibirInfos());