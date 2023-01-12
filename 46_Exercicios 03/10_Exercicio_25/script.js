function decrementaPar(numeroPar) {
    for(let i = numeroPar; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

decrementaPar(10);