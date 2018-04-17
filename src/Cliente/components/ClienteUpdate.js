import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Kaede, Isao, Hoshi } from 'react-native-textinput-effects';

import Cliente from '../../models/Cliente';
import { 
    modifyEmail, 
    modifyLogin, 
    modifyNome, 
    modifySenha, 
    modifyTelefone,
    modifyCidade,
    modifyUf,
    modifyCep,
    modifyLogradouro,
    modifyNumero,
    modifyBairro,
    modifyCpf,
    saveCliente, 
    getAllCientes, 
    setClienteToUpdate, 
    updateCliente 
} from '../redux/actions/clienteActions';

class ClienteUpdate extends Component {
    constructor(props) {
        super(props);

        // recebe cliente por parametro e set os campos
        this.setCliente(this.props.navigation.state.params.cliente);
    }

    setNome(nome) {
        this.props.modifyNome(nome);
    }

    setEmail(email) {
        this.props.modifyEmail(email);
    }

    setLogin(login) {
        this.props.modifyLogin(login);
    }

    setTelefone(text) {
        this.props.modifyTelefone(text);
    }

    setCidade(text) {
        this.props.modifyCidade(text);
    }

    setUf(text) {
        this.props.modifyUf(text);
    }

    setCep(text) {
        this.props.modifyCep(text);
    }

    setLogradouro(text) {
        this.props.modifyLogradouro(text);
    }

    setNumero(text) {
        this.props.modifyNumero(text); // converter para int
    }

    setBairro(text) {
        this.props.modifyBairro(text);
    }

    setCpf(text) {
        this.props.modifyCpf(parseInt(text));
    }

    setCliente(cliente) {
        this.setNome(cliente.nome);
        this.setEmail(cliente.email);
        this.setLogin(cliente.login);
        this.props.setClienteToUpdate(cliente);
    }

    updateCliente() {

        // pegar propriedades e atribuir ao cliente antes de mandar salvar
        // const {nome, email, login, senha, telefone, cidade, uf, } = this.props;
        const cliente = this.props.cliente;
        

        alert(cliente.nome);
        console.log(cliente);

        // this.props.updateCliente(cliente);
    }

    render() {
        console.log(this.props);
        return (
            <ScrollView>
            <View>
                <TextInput
                    value={this.props.nome}
                    placeholder="Nome"
                    onChangeText={(text) => this.setNome(text)}
                />
                <TextInput
                    value={this.props.email}
                    placeholder="Email"
                    onChangeText={(text) => this.setEmail(text)}
                    keyboardType='email-address'
                />
                <TextInput
                    value={this.props.login}
                    placeholder="Login"
                    onChangeText={(text) => this.setLogin(text)}
                />
                <TextInputMask
                    value={this.props.telefone}
                    placeholder="Telefone"
                    onChangeText={(text) => this.setTelefone(text)}
                    type={'cel-phone'}
                    options={{
                        format: '(99) 99999-9999'
                    }}
                    keyboardType='phone-pad'
                />
                <TextInput
                    value={this.props.cidade}
                    placeholder="Cidade"
                    onChangeText={(text) => this.setCidade(text)}
                />
                <TextInput
                    value={this.props.uf}
                    placeholder="UF"
                    onChangeText={(text) => this.setUf(text)}
                    maxLength={2}
                />
                <TextInputMask
                    value={this.props.cep}
                    placeholder="CEP"
                    onChangeText={(text) => this.setCep(text)}
                    type={'zip-code'}
                    options={{
                        format: '99999-999'
                    }}
                    keyboardType='numeric'
                />
                <TextInput
                    value={this.props.logradouro}
                    placeholder="Logradouro"
                    onChangeText={(text) => this.setLogradouro(text)}
                />
                <TextInputMask
                    value={this.props.numero}
                    placeholder="Número"
                    onChangeText={(text) => this.setNumero(text)}
                    type={'only-numbers'}
                    keyboardType='numeric'
                />
                <TextInput
                    value={this.props.bairro}
                    placeholder="Bairro"
                    onChangeText={(text) => this.setBairro(text)}
                />
                <TextInputMask
                    value={this.props.cpf}
                    placeholder="CPF"
                    onChangeText={(text) => this.setCpf(text)}
                    type={'cpf'}
                    options={{
                        format: '999.999.999-99'
                    }}
                />

                <Button 
                    title="Update"
                    onPress={() => this.updateCliente()}
                />

                <Button 
                    title="Find All"
                    onPress={() => this.getClientes()}
                />
            </View>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        nome: state.clienteReducers.nome,
        email: state.clienteReducers.email,
        login: state.clienteReducers.login,
        senha: state.clienteReducers.senha,
        telefone: state.clienteReducers.telefone,
        cidade: state.clienteReducers.cidade,
        uf: state.clienteReducers.uf,
        cep: state.clienteReducers.cep,
        logradouro: state.clienteReducers.setLogradouro,
        numero: state.clienteReducers.numero,
        bairro: state.clienteReducers.bairro,
        cpf: state.clienteReducers.cpf,
        cliente: state.clienteReducers.cliente,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        modifyNome,
        modifyEmail,
        modifyLogin,
        modifySenha,
        modifyTelefone,
        modifyCidade,
        modifyUf,
        modifyCep,
        modifyLogradouro,
        modifyNumero,
        modifyBairro,
        modifyCpf,
        getAllCientes,
        updateCliente,
        setClienteToUpdate,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteUpdate);