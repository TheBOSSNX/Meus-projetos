let nome = "André";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "Patrícia";
    }

    if(i == 5 && nome == "Patrícia") {
        console.log("O nome é Patrícia, pode parar");
        break;
    }

    console.log(i);
}