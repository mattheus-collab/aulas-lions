function listagem(lista) {
    if (lista.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    for (let usuario of lista) {
        console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Número: ${usuario.numero}, Email: ${usuario.email}`);
    }
}

module.exports = listagem;
