
function contarCaracteres(cadena) {
  if (typeof cadena !== "string") throw new Error("Debes pasar una cadena.");
  return cadena.length;
}

console.log(contarCaracteres("Hola mundo")); 
