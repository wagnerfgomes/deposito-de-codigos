const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereço: [
        {
            rua: 'Rua',
            numero: 32,
            complemento: 'casa',
        },
        {
            rua: 'Rua2',
            numero: 64,
            complemento: 'apto 23',
        },
    ],
};

for (let chave in estudante){
    console.log(estudante[chave]);
}
