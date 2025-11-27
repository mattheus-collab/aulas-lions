const prompt = require("prompt-sync")();
let usuarios = [];
let id = 1;
let opcao = "";

while (opcao !== "0") {
    console.log("   Menu    ");
    console.log("1 - Criar usuario novo");
    console.log("2 - Listar usuarios");
    console.log("3 - Atualizar usuario");
    console.log("4 - Deletar usuario");
    console.log("0 - sair");

    opcao = prompt("Escolha uma das opções!: ");

    switch (opcao) {
        case "1":
            console.log("Criação de usuario! ");
            const nome = prompt("Digite o nome ");
            const email = prompt("Digite o email ");
            const novoUsuario = { id: id, nome: nome, email: email };
            usuarios.push(novoUsuario);
            console.log("Usuario criado com sucesso! ");
            id++;
            break;

        case "2":
            console.log("   Lista de usuarios   ");
            if (usuarios.length === 0) {
                console.log("Nenhum usuario cadastrado. ");
            } else {
                let i = 0;
                while (i < usuarios.length) {
                    console.log(
                        "ID: " + usuarios[i].id +
                        " | Nome: " + usuarios[i].nome +
                        " | Email: " + usuarios[i].email
                    );
                    i++;
                }
            }
            break;

        case "3":
            console.log("   Atualizar usuario   ");
            const idAtualizar = parseInt(prompt("Digite o ID: "));
            let encontrado = false;
            let j = 0;

            while (j < usuarios.length) {
                if (usuarios[j].id === idAtualizar) {
                    usuarios[j].nome = prompt("Novo nome: ");
                    usuarios[j].email = prompt("Novo email: ");
                    console.log("Usuario atualizado com sucesso! ");
                    encontrado = true;
                }
                j++;
            }

            if (encontrado === false) {
                console.log("Usuario não encontrado.");
            }
            break;

        case "4":
            console.log("    Deletar usuario    ");
            const idDeletar = parseInt(prompt("Digite o ID: "));
            let novoArray = [];
            let k = 0;

            while (k < usuarios.length) {
                if (usuarios[k].id !== idDeletar) {
                    novoArray.push(usuarios[k]);
                }
                k++;
            }

            usuarios = novoArray;
            console.log("Usuario deletado (se existia). ");
            break;

        case "0":
            console.log("Saindo do programa... ");
            break;

        default:
            console.log("Opção inválida! Tente novamente. ");
    }
}
