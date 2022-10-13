//acidentalmente um professor lançou cinco notas de um aluno e devemos retirar a ultima nota para fazer a mpedia correta.
//notas = 10, 6, 8, 5, 10

const notas = [10, 6, 8, 5, 10];
notas.pop(); //não coloca nenhum elemento, pois não aceita. Nesse caso sempre vai retirar o ultimo elemento da lista (no caso o ultimo 10)
console.log(notas);
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}.`);
