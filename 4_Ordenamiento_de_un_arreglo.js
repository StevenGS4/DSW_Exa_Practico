function ordenararreglo(arreglo) {
    let n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                [arreglo[j], arreglo[j + 1]] = [arreglo[j + 1], arreglo[j]];
            }
        }
    }
    return arreglo;
}

// ejemplo
const numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];
const numerosOrdenados = ordenararreglo([...numerosDesordenados]); 
console.log("Números desordenados "+ numerosDesordenados);
console.log("Números ordenados "+ numerosOrdenados); // [11, 12, 22, 25, 34, 64, 90]