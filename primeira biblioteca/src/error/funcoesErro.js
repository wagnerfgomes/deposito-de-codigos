export default function tratarErro(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo não encrontrado');
    } else {
        return 'Erro na aplicação';
    }
}
