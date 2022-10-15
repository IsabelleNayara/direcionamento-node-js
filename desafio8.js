// Procurando listas

// Crie uma função que recebe como argumento o nome de um aluno.

// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo indice.

// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasDeAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasDeAlunos[0].includes(nomeDoAluno)){  //verificando se o aluno está na lista. O includes retorna um booleano
        let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno)           //indexOf vai buscar pelo nome do aluno. Retorna o numero do indice
        return listaDeNotasDeAlunos[0][indice] + ", sua média é " + listaDeNotasDeAlunos[1][indice]
    }else{
        return "Aluno não está cadastrado!"
    }
}
console.log(exibeNomeNota("Ana"));