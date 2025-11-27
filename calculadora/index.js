const prompt = require("prompt-sync")();
const dividir = require("./dividir.js");
const multiplicar = require("./multiplicar.js");
const porcentagem = require("./porcentagem.js");
const soma = require("./soma.js");
const subtrair = require("./subtrair.js");

let op = "";

while (op !== "0") {
    console.log("   Menu    ");
    console.log(" 1 = soma");
    console.log(" 2 = subtrair");
    console.log(" 3 = divisão");
    console.log(" 4 = porcentagem");
    console.log(" 5 = multiplicação");
    console.log(" 0 = sair");

    op = prompt("Escolha uma das opções no menu: ");

    if (op === "0") {
        console.log("Saindo do programa...");
        break;
    }

    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Agora digite o segundo número: "));

    switch (op) {
        case "1":
            console.log("Resultado:", soma(num1, num2));
            break;
        case "2":
            console.log("Resultado:", subtrair(num1, num2));
            break;
        case "3":
            console.log("Resultado:", dividir(num1, num2));
            break;
        case "4":
            console.log("Resultado:", porcentagem(num1, num2));
            break;
        case "5":
            console.log("Resultado:", multiplicar(num1, num2));
            break;
        default:
            console.log("Opção inválida.");
    }
} 
