const prompt = require("prompt-sync")();

console.log("Me fala um ano e vou lhe dizer se ele é bissexto.");

let ano = parseInt(prompt("Ano: "));

if (ano % 400 === 0) {
    console.log("Esse ano é bissexto!");
} else if (ano % 100 === 0) {
    console.log("Esse ano não é bissexto!");
} else if (ano % 4 === 0) {
    console.log("Esse ano é bissexto!");
} else {
    console.log("Esse ano não é bissexto!");
}
