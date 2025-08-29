function sumaArreglo(nums) {
  if (!Array.isArray(nums)) throw new Error("Debes pasar un arreglo.");
  if (!nums.every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error("Todos los elementos deben ser números finitos.");
  }
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumaArreglo([2, 5, 7, -1])); // 13
