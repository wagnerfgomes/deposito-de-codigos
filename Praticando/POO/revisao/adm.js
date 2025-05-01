import User from './user.js';
class Admin extends /* herança */ User { 
    alterarDados(dado, novoDado) {
        this[dado] = novoDado;
    }
    exibirDados() /* polimorfismo */{
        return `admin - ${super.exibirDados()} ${this.ativo}, ${this.cpf}`;
    }
}

export default Admin