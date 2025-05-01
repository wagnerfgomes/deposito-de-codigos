
const arr = [1, 3, 'a', 'bola', true];
const arrInt = [1, 6, 5, 9, 87, 4, 65, 5, 1, 3, 4];
const arrPares = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

function indiceElemento(arr) {
    //Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
    for (const elemento of arr) {
        console.log(`${arr.indexOf(elemento)} - ${elemento}`);
    }
}

function maiorEMenor(arr) {
    // Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
    let menor = Infinity;
    let maior = -Infinity;
    for (const num of arr) {
        if (num < menor){
            menor = num//1
        }
        if (num > maior){
            maior = num
        }
    }
    console.log(`o menor número é ${menor} e o maior número é ${maior}`);   
}

function soPares(arr){
    // Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
    const verificados = [];
    for (const num of arr) {
        
        if (num%2 === 0){
            verificados.push(num)
        }
    }
    console.log(verificados);
}

indiceElemento(arr);
maiorEMenor(arrInt);
soPares(arrPares)



