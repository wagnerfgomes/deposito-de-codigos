export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudande';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get ativo() {
        return this.#ativo;
    }
    get role() {
        return this.#role;
    }

    set nome(novoNome) {
        return (this.#nome = novoNome);
    }
    // código omitido

    exibirInfos() {
        return `${objUser.nome}, ${objUser.email}`;
    }
}

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); //true
