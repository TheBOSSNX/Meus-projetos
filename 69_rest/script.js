let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

console.log(num1,num2,num3);
console.log("pausa");
console.log(num3,num4);
console.log("pausa");
console.log(2,6,7,8,9,5,3,2,5,6,2,4,5);
