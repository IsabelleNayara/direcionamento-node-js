//o que acontece se adicionarmos um array sem nenhum valor na lista?

const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)
//--------------outro exemplo
const arrayVazia1 = [];
console.log(arrayVazia1[0])
//--------------outro exemplo
const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
console.log(arrayVazia2[0])
console.log(arrayVazia2[1])
console.log(arrayVazia2[2])
//--------------outro exemplo
const arrayVazia3 = [,,,];
console.log(arrayVazia3.length)
arrayVazia3.push(50)
console.log(arrayVazia3)
console.log(arrayVazia3.length)