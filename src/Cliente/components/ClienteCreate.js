import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Kaede, Isao, Hoshi } from 'react-native-textinput-effects';

import styles from '../../appStyle';
import { validateEmail } from '../../../utils/validate';
import Cliente from '../../models/Cliente';
import { 
    clear,
    modifyEmail, 
    modifyLogin, 
    modifyNome, 
    modifySenha, 
    modifyConfirmaSenha,
    saveCliente, 
    getAllCientes,
} from '../redux/actions/clienteActions';

class ClienteCreate extends Component {
    constructor(props) {
        super(props);
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

    setSenha(senha) {
        this.props.modifySenha(senha);
    }

    setConfirmaSenha(senha, confirmaSenha) {
        this.props.modifyConfirmaSenha(senha, confirmaSenha);
    }

    saveNewCliente() {
        const { nome, email, login, senha } = this.props;
        const newCliente = new Cliente(nome, email, login, senha);

        if(this.formValidate()) {
            this.props.saveCliente(newCliente);
            
            // clear fields
            this.props.clear();
        }
    }

    formValidate() {
        let flag = true;

        // valida nome
        if(this.props.nome.length < 3) {
            this.setNome(this.props.nome);
            flag = false;
        }
        
        // valida email
        if(!validateEmail(this.props.email)) {
            this.setEmail(this.props.email);
            flag = false;
        }
        
        // valida login
        if(this.props.login.length < 3) {
            this.setLogin(this.props.login);
            flag = false;
        }

        // valida senha
        if(this.props.senha.length < 6) {
            this.setSenha(this.props.senha);
            flag = false;
        }

        // valida confirmação de senha
        if(this.props.confirmaSenha !== this.props.senha) {
            this.setConfirmaSenha(this.props.senha, "");
            flag = false 
        }

        return flag;
    }

    getClientes() {
        getAllCientes();

        console.log(this.props.clientes);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <TextInput
                        value={this.props.nome}
                        placeholder="Nome"
                        onChangeText={(text) => this.setNome(text)}
                        underlineColorAndroid={(this.props.nomeIsValid) ? '#00334e' : '#db1c1c'}
                    />
                    {
                        (this.props.nomeIsValid) ? null: 
                        <Text style={styles.labelDanger}>* Campo obrigatório</Text>
                    }

                    <TextInput
                        value={this.props.email}
                        placeholder="Email"
                        onChangeText={(text) => this.setEmail(text)}
                        underlineColorAndroid={(this.props.emailIsValid) ? '#00334e' : '#db1c1c'}
                    />
                    {
                        (this.props.emailIsValid) ? null: 
                        <Text style={styles.labelDanger}>* E-mail inválido</Text>
                    }

                    <TextInput
                        value={this.props.login}
                        placeholder="Login"
                        onChangeText={(text) => this.setLogin(text)}
                    />
                    {
                        (this.props.loginIsValid) ? null: 
                        <Text style={styles.labelDanger}>* Login inválido</Text>
                    }
                    
                    <TextInput
                        value={this.props.senha}
                        placeholder="Senha"
                        onChangeText={(text) => this.setSenha(text)}
                    />
                    {
                        (this.props.senhaIsValid) ? null: 
                        <Text style={styles.labelDanger}>* A senha deve ter no mínimo 6 caracteres</Text>
                    }
                    
                    <TextInput
                        value={this.props.confirmaSenha}
                        placeholder="Confirmar senha"
                        onChangeText={(text) => this.setConfirmaSenha(this.props.senha, text)}
                    />
                    {
                        (this.props.confirmaSenhaIsValid) ? null: 
                        <Text style={styles.labelDanger}>* As senhas não conferem</Text>
                    }

                    <Button 
                        title="Save"
                        onPress={() => this.saveNewCliente()}
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
        confirmaSenha: state.clienteReducers.confirmaSenha,
        clientes: state.clienteReducers.clientes,
        
        // teste
        nomeIsValid: state.clienteReducers.nomeIsValid,
        emailIsValid: state.clienteReducers.emailIsValid,
        loginIsValid: state.clienteReducers.loginIsValid,
        senhaIsValid: state.clienteReducers.senhaIsValid,
        confirmaSenhaIsValid: state.clienteReducers.confirmaSenhaIsValid,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clear,
        modifyNome,
        modifyEmail,
        modifyLogin,
        modifySenha,
        modifyConfirmaSenha,
        saveCliente,
        getAllCientes,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteCreate);