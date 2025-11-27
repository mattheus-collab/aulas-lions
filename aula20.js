const prompt = require("prompt-sync")();
let numeroAleatorio = Math.floor(Math.random() * 10) + 1


let numero = parseInt(prompt("Digite um numero: "))
    while (numeroAleatorio != numero){
        if(numeroAleatorio !== numero){
            console.log("Voce errou! ")
            numero = parseInt(prompt("DIgite um numero: "))
        }
        if (numeroAleatorio === numero){
            console.log("Voce acertou o numero!")
        }
    }