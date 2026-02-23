function atualizar(lista, id, novosDados) {
    const bd = lista.findIndex(usuario => usuario.id === id);

    if (bd === -1) {
        console.log("ID não encontrado.");
        return;
    }

    lista[bd].nome = novosDados.nome;
    lista[bd].numero = novosDados.numero;
    lista[bd].email = novosDados.email;
}

module.exports = atualizar;
