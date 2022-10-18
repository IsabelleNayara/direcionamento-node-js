// Alterando strings com map()

// Desafio - Padronizando os nomes

// Precisamos padronizar a lista de alunos para conter apenas letras maiusculas:

// "ana Julia","Caio vinicius","BIA silva"

let nomes = ["ana Julia","Caio vinicius","BIA silva"]

const nomesAtulizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtulizados);