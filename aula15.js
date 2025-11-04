// const prompt = require("prompt-sync")();

// let soma = 0;
// let contador = 0;
// let idade;

// while (true) {
//   idade = parseInt(prompt("Digite 5 idades (0 para sair): "));

//   if (idade === 0) {
//     break;
//   }

//   soma += idade;   // soma todas as idades
//   contador++;       // conta quantas idades foram digitadas
// }

// if (contador > 0) {
//   let media = soma / contador;
//   console.log("A média das idades é:", media);
// } else {
//   console.log("Nenhuma idade foi digitada.");
// }
const prompt = require("prompt-sync")();

let soma = 0;
let idade;

for (let i = 1; i <= 5; i++) {
  idade = parseInt(prompt(`Digite a idade ${i}: `));
  soma += idade;
}

let media = soma / 5;
let mediaArredondada = Math.round(media * 100) / 100;

console.log("A média das idades é:", mediaArredondada);

if (media < 25) {
  console.log("A turma é jovem.");
} else if (media <= 60) {
  console.log("A turma é adulta.");
} else {
  console.log("A turma é idosa.");
}
  