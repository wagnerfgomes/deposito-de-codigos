import Admin from './adm.js'
import User from './user.js'


const novoAdm = new Admin('wagner', 'w@w.com', '123', '2024-01-01', 'admin');
const novoUser = new User('ricardo', 'r@r.com', '555', '2024-01-02');

console.log(novoAdm.exibirDados());
console.log(novoUser.exibirDados());
