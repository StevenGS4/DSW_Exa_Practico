function concatenarArreglos(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error("Debes pasar dos arreglos.");
  }
  if (![...a, ...b].every(s => typeof s === "string")) {
    throw new Error("Todos los elementos deben ser strings.");
  }
  return a.concat(b);
}

console.log(concatenarArreglos(["Hola", "mundo"], ["desde", "JS"]));

