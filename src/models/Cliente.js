class Cliente {
    constructor(nome, email, login, senha) {
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
        this.telefone = '';
        this.cidade = '';
        this.uf = '';
        this.cep = '';
        this.logradouro = '';
        this.numero = 0;
        this.bairro = '';
        this.cpf = '';
        this.dataDesativacao = new Date();
        this.status = '';
    }

    // getNome() {
    //     return this.nome;
    // }

    // setNome(nome) {
    //     this.nome = nome;
    // }

    // getEmail() {
    //     return this.email;
    // }

    // setEmail(email) {
    //     this.email = email;
    // }

    // getSenha() {
    //     return this.senha;
    // }

    // setSenha(senha) {
    //     this.senha = senha;
    // }

    // getTelefone() {
    //     return this.telefone;
    // }

    // setTelefone(telefone) {
    //     this.telefone = telefone;
    // }

    // getCidade() {
    //     return this.cidade;
    // }

    // setCidade(cidade) {
    //     this.cidade = cidade;
    // }

    // getUf() {
    //     return this.uf;
    // }

    // setUf(uf) {
    //     this.uf = uf;
    // }

    // getCep() {
    //     return this.Cep;
    // }

    // setCep(cep) {
    //     this.cep = cep;
    // }

    // getLogradouro() {
    //     return this.logradouro;
    // }

    // setLogradouro(logradouro) {
    //     this.logradouro = logradouro;
    // }
}

module.exports = Cliente;