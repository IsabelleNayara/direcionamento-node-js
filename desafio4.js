//Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos: -"João", "Julina", "Ana", "Caio", "Lara", "Marjorie", "Gulherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo". Divida em duas salas com o mesmo tamanho

const nomes = ["João", "Julina", "Ana", "Caio", "Lara", "Marjorie", "Gulherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"];
console.log(nomes.length);
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2); //se não colocar o segundo paramentro vai entender que é até o fim da lista
// console.log(sala1);
// console.log(sala2);
console.log("A sala 1 tem " + sala1.length + " alunos. Segue os nomes abaixo:");
console.log(`Alunos da sala1 ${sala1}`);
console.log("A sala 2 tem " + sala2.length + " alunos. Segue os nomes abaixo:");
console.log(`Alunos da sala2 ${sala2}`)

