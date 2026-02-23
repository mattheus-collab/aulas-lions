function remover(lista, id) {
    const indice = lista.findIndex(usuario => usuario.id === id);

    if (indice === -1) {
        console.log("ID não encontrado.");
        return;
    }

    lista.splice(indice, 1);
}

module.exports = remover;
