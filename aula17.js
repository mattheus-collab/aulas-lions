// const prompt = require("prompt-sync")();
// console.log("Digite o Usuario e a senha para ser liberado!")
// let usuario = parseInt(prompt("Digite o usuario! :"))
// let senha = parseInt(prompt("Digite a senha, ela deve conter 5 numeros! : "));
// if (usuario === adimin){
//     console.log("Usuario correto agora digite a senha! ")
// }else if(usuario > adimin){
//     console.log("Usuario incorreto! tente novamente! :")
// }
// if (senha === 12345){
//     console.log("Senha correta! ")
// } else if (senha > 12345){
//     console.log("Senha errada tente novamente.")
// }





const prompt = require("prompt-sync")();

console.log("Digite o usuário e a senha para ser liberado!");

// usuário e senha corretos
const usuarioCorreto = "admin";
const senhaCorreta = "12345";

// Solicita o usuário
let usuario = prompt("Digite o usuário: ");

// Verifica o usuário
if (usuario === usuarioCorreto) {
    console.log("Usuário correto! Agora digite a senha.");
    
    // Solicita a senha
    let senha = prompt("Agora digite a senha, ela deve conter 5 números: ");
    
    // Verifica a senha
    if (senha === senhaCorreta) {
        console.log("Senha correta! Acesso liberado!");
    } else {
        console.log("Senha incorreta! Tente novamente.");
    }
} else {
    console.log("Usuário incorreto! Tente novamente.");
}
