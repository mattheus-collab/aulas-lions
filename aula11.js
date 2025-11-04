const prompt = require("prompt-sync")();
const Suaidade = prompt("Digite sua idade ");
console.log("Olá usuario, analizamos sua idade e ");
if (Suaidade >= 16) {
    console.log("voce pode votar")
} else if (Suaidade <= 16){
    console.log("Voce ainda não pode votar");
}