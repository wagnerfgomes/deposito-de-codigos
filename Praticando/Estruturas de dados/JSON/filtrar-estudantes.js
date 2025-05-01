const estudantes = require('./estudantes.json');

function filtrarEstudantes(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEndereçosImcopletos = filtrarEstudantes(estudantes, 'cep');

console.log(listaEndereçosImcopletos);
