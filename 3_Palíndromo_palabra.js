function esPalindromo(palabra) {
  if (typeof palabra !== "string") throw new Error("Debes pasar texto.");
  const normalizada = palabra
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .replace(/\s+/g, ""); 

  const inversa = [...normalizada].reverse().join("");
  return normalizada.length > 0 && normalizada === inversa;
}


console.log(esPalindromo("reconocer")); 
console.log(esPalindromo("ÁnA"));       
console.log(esPalindromo("casa"));      
