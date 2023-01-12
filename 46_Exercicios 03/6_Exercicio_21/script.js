function detectaTipo(dado) {
    if(typeof(dado) === 'string') {
        console.log("Este dado é uma String.");
    } else if(typeof(dado) === 'boolean') {
        console.log("Este dado é um Boolean.");
    } else if (typeof(dado) === 'number') {
        console.log("Este dado é um Number.");
    }
}

detectaTipo(1);
detectaTipo(true);
detectaTipo("Olá");