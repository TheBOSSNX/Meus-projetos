let pessoa = {
    nome: 'André',
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: 'André',
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa2);
console.log(pessoa3 == pessoa);

pessoa2.nome = 'Pedro';

console.log(pessoa.nome);

pessoa.nome = 'Maria';

console.log(pessoa2.nome);