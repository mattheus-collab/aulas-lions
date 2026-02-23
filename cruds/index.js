const prompt = require("prompt-sync")();
const atualizar = require("./atualizar.js");
const cadastro = require("./cadastro.js");
const listagem = require("./listagem.js");
const remover = require("./remover.js");

let usuarios = []

let novoContato = {}

let menu = "";

while (menu !== "0") {
  console.log("   Menu    ");
  console.log(" 1 => Atualização de cadastro");
  console.log(" 2 => Novo cadastro");
  console.log(" 3 => Listar cadastros");
  console.log(" 4 => Remover cadastros");
  console.log(" 0 => sair");

  menu = prompt("Escolha uma opção! ");


  switch (menu) {
    case "1":
      const numId = parseInt(prompt("Digite o ID do cadastro: "));
      const novoNome = prompt("Digite o novo nome: ");
      const novoNumero = prompt("Digite o novo numero: ");
      const novoEmail = prompt("Digite o novo email: ");
      atualizar(usuarios, numId, { nome: novoNome, numero: novoNumero, email: novoEmail });
      break;

    case "2":
      novoContato = cadastro()
      usuarios.push(novoContato)
      console.log("Cadastro realizado!");
      break;

    case "3":
      listagem(usuarios);
    break;

    case "4":
      const idRemover = parseInt(prompt("Digite o id para remover: "));
      remover(usuarios, idRemover);
      console.log("ID removido com sucesso.");
            listagem(usuarios);
    break;
  }
}

console.log("Saindo do programa Chefe...");
