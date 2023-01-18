let nomes = ["André","Patrícia","Matheus","João","Maria","Martha"];
let numeros = [1,2,3,4];

function verificaElementos(arrays) {
    if(arrays.length >= 5){
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificaElementos(nomes);
verificaElementos(numeros);

