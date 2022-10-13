//desafio atualziando elementos. Crie uma lista de chamada com os seguintes alunos: "João", "Ana", "Caio", "Lara", "Marjorie", "Leo". Porém a Ana e o Caio mudaram de escola e o Rodrigo entrou na escola. Atualise a lista.

const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
listaDeChamada.splice(1, 2, "Rodrigo");  //permite remover elementos de qualquer lugar e colocar elementos em qualquer lugar dentro do array
console.log(`Lista de chamadas é: ${listaDeChamada}`);


//outro exemplo
const listaDeChamada2 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
listaDeChamada2.splice(2, 0, "Rodrigo");
console.log(`Lista de chamadas é: ${listaDeChamada2}`);

// outro exemplo
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)
