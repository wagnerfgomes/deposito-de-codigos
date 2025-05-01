import User from './class.js';

//class Nova extends SuperClasse
class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas){
        return `curso${nomeCurso} tem ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01")
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());