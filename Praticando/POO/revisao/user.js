class User {
    #nome; /* encapsulamento */
    #email;
    #dataNascimento;
    #cpf;
    #role;
    #ativo;
    constructor(nome, email, cpf, dataNascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
        this.#role = role || 'cliente';
        this.#ativo = ativo;
    }
    exibirDados() {
        return `${this.#nome}, ${this.#email}, ${this.#dataNascimento}, ${this.#role}`;
    }

    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get ativo() {
        return this.#ativo;
    }
    get role() {
        return this.#role;
    }
    get cpf() {
        return this.#cpf;
    }
    get dataNascimento() {
        return this.#dataNascimento;
    }


    set nome(novoNome) {
        if (this.#role === 'admin') {
            return (this.#nome = novoNome);
        }
    }
    set email(novoEmail) {
        if (this.#role === 'admin') {
            return (this.#email = novoEmail);
        }
    }
    set ativo(novoAtivo) {
        if (this.#role === 'admin') {
            return (this.#ativo = novoAtivo);
        }
    }

}

export default User;
