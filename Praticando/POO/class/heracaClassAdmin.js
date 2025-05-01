import User from './class.js';

//class SubClasse extends SuperClasse
export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `curso${nomeCurso} tem ${qtdVagas} vagas.`;
    }

    mostarNome() {
        //pós GET
        return this.nome;
    }
    mudarNome(novoNome) {
        //pós SET
        return (this.nome = novoNome);
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.mostarNome());
novoAdmin.nome = 'Wagner'
console.log(novoAdmin.mostarNome());
