const prompt = require("prompt-sync")();

function cadastro() {
    const nome = prompt("Nome: ");
    const numero = prompt("Número: ");
    const email = prompt("Email: ");

    const novoUsuario = {
        id: Math.floor(Date.now() / 9999999999),
        nome: nome,
        numero: numero,
        email: email
    };

    return novoUsuario;
}

module.exports = cadastro;
