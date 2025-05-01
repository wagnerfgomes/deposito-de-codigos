const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    // enderecos: [
    //     {
    //         rua: 'Rua Joseph Climber',
    //         numero: '45',
    //         complemento: 'apto 43',
    //     },
    //     {
    //         rua: 'Rua Dona Clotilde',
    //         numero: '71',
    //         complemento: null,
    //     },
    // ],
};

const chaveObjetos = Object.keys(estudante);
const valorObjetos = Object.values(estudante);
const valorEChave = Object.entries(estudante);

console.log(chaveObjetos);
//[ 'nome', 'idade', 'cpf', 'turma', 'bolsista', 'telefones' ]
console.log(valorObjetos);
// [ 'José Silva', 32, '12312312312', 'JavaScript', true, [ '551199999998', '551199999993' ] ]
console.log(valorEChave);
// [
//     ['nome', 'José Silva'],
//     ['idade', 32],
//     ['cpf', '12312312312'],
//     ['turma', 'JavaScript'],
//     ['bolsista', true],
//     ['telefones', ['551199999998', '551199999993']],
// ];
