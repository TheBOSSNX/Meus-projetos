function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é: "+ mult);

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true) {
        console.log("Pode dirigir.");
    } else if(idade >= 18 && cnh == false) {
        console.log("Não pode dirigir, mas pode tirar a cnh.");      
    } else {
        console.log("Não pode dirigir.");
    }
}

podeDirigir(18, 1);
podeDirigir(18, true);