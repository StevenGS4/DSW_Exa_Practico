function invertirFrase(frase) {
    return frase.split(' ').reverse().join(' ');
}

//ejemplo
const fraseOriginal = "Desarrollo de servicios web";
const fraseInvertida = invertirFrase(fraseOriginal);
console.log(fraseInvertida); 

