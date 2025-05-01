// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 3, 5, 6, 4, 98, 5, 645, 89, 54, 3, 1, 9, 21, 6];

function reduceArr(arr) {
    console.log(arr.reduce((acumulador, valor) => (acumulador += valor)));
}

// reduceArr(valores);

// 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const uniao = [...new Set([...coresLista1, ...coresLista2])];
// console.log(uniao);

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function soPares(arr) {
    const listaFinal = arr.filter((valor) => valor % 2 === 0);
    console.log(listaFinal);
}

// soPares(valores)

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const numerosTeste = [
    42, 7, 19, -3, 56, 23, 8, -14, 0, 12, 29, 5, 1, 3, 5, 6, 4, 98, 5, 645, 89,
    54, 3, 1, 9, 21, 6,
];

function filtarArr(arr) {
    const listaFinal = [...new Set(arr.filter((valor) => valor % 3 === 0 && valor > 5))];
    console.log(listaFinal);
}

// filtarArr(numerosTeste);

numerosTeste.splice()