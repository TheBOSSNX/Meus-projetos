let pessoa = {
    "nome": "André",
    "idade": 19,
    "profissao": "programador",
    "hobbies": ["Video Games","Musicas","Leitura","Exercitar"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
//console.log(pessoaTexto.nome);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

console.log(pessoaJson.hobbies[0]);