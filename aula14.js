const prompt = require("prompt-sync")();

let soma = 0;
let numero;

while (true) {
  numero = parseInt(prompt("Digite um número (0 para sair): "));
  
  if (numero === 0) {
    break;
  }
  
  soma += numero;

}

console.log("A soma dos números digitados é:", numero);
