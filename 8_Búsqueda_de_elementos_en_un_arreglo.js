function buscarNombre(arreglo, nombre) {
    if (arreglo.includes(nombre)) {
        return `El nombre "${nombre}" sí está en el arreglo.`;
    } else {
        return `El nombre "${nombre}" no está en el arreglo.`;
    }
}
//ejemplo
const nombres = ["Juan", "Humberto", "Becerra", "Partida"];
const nombreBuscado = "Humberto";
const resultado = buscarNombre(nombres, nombreBuscado);
console.log(resultado); 