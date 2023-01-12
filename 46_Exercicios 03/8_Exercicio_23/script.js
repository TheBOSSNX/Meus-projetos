function quantidadeTexto(texto) {
    console.log(texto.length);
    if(texto.length > 10) {
        console.log("Texto muito longo.");
    } else {
        console.log("Texto dentro do limite.");
    } 
}

quantidadeTexto("Ola, mundo!");
quantidadeTexto("André");
quantidadeTexto("12345678910");