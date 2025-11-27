const prompt = require("prompt-sync")();
console.log("")
 let palavra = prompt("Digite uma palavra:")
 let palavraInvertida = "";
 for (let i = palavra.length - 1; i>= 0; i--){
palavraInvertida += palavra[i];
 } 
 if (palavra === palavraInvertida){
    console.log("é um palindromo!");
 }else {
    console.log("Essa não é palindromo! ");
 }