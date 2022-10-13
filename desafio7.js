// Desafio - lista com 2 dimensões
// Crie uma lista com os seguintes alunos: "João", "Juliana", "Caio", "Ana"

// Crie uma lista com as seguintes médias: 10, 8, 7.5, 9

// Crie uma lista com 2 dimensões com os nomes e médias.

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasDeAlunos = [alunos, mediaDosAlunos];
console.log(`${listaDeNotasDeAlunos[0][0]}, sua média é ${listaDeNotasDeAlunos[1][0]}`)