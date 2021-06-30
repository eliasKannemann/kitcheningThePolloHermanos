let elementos = [1, 2, 3, 4, 5];

elementos[3] = elementos[1];

console.log(elementos[3]);

function leer(n){
    let i = 1;
    let resultado = 1;
    for(let i = 1; i <= n; i++){
        resultado = resultado * i
        console.log(resultado)
    }
}

leer(5)

