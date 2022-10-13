//o professor acidentamente passou 3 das 4 notas no sistema do aluno: 10, 6 e 8. Para corrigir coleque a nota 7 e faça o calculo da media correta.
const notas = [10, 6, 8];
notas.push(7); //para adicionar um elemento que não está na lista anterior (medoto de array)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);