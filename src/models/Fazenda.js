class Fazenda {
    constructor(nome, hectares, telefone, email, enderecoWeb, cidade, uf, bairro, clienteId) {
        this.nome = nome;
        this.hectares = hectares;
        this.email = email;
        this.enderecoWeb = enderecoWeb;
        this.telefone = telefone;
        this.cidade = cidade;
        this.uf = uf;
        this.bairro = bairro;
        this.dataDesativacao = new Date();
        this.status = '';
        this.clienteId = clienteId;
    }
}