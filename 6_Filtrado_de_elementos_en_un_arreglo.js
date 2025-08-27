function filtrarMayores(arr, valor) {
    return arr.filter(num => num > valor);
}

//ejemplo
const numeros = [10, 20, 30, 40, 50, 60];
const valorUsuario = 35;
const numerosFiltrados = filtrarMayores(numeros, valorUsuario);
console.log(numerosFiltrados); 