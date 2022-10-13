// Desafio média de aluno

// Médias: 10, 6.5, 8, 7.5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;
// let media = (nota1 + nota2 + nota3 + nota4) / 4;         //mas se tiver muitos alunos, fica inviável fazer a média dessa forma, então o ideal é fazer uma lista de todas as notas (coleção ordenada de valores, cada valor é um elemento e cada elemento tem uma posição)
// console.log(media);

const notas = [10, 6.5, 8, 7.5]
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length //notas.length  mostra o tamanho da lista, nesse caso no lugar de colocar 4 (de 4 notas) usamos o notas.length.
console.log(media);