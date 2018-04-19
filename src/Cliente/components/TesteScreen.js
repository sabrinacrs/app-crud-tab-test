import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cliente from '../../models/Cliente';
import { dropTableClientes, getAllCientes } from '../redux/actions/clienteActions';

class TesteScreen extends Component {
    constructor(props) {
        super(props);

        const cc = new Cliente('Cliente 1', 'cliente@email.com', 'clientelogin', 'senhacliente');

        this.state = { 
            cliente: cc
        }
    }

    metAlert() {
        alert('Alo');
    }

    dropTable() {
        this.props.dropTableClientes();
    }

    getClientes() {
        getAllCientes();

        console.log(this.props.clientes);
    }

    render () {
        return (
            <View>
                <Button 
                    title='Update'
                    // onPress={() => this.metAlert()}
                    onPress={() => this.props.navigation.navigate('ClienteCreateStack', {}, {
                        type: 'Navigate',
                        routeName: 'ClienteCreate',
                        params: { cliente: this.state.cliente}
                    })} 
                />

                <Button 
                    title="Drop clientes table"
                    onPress={() => this.dropTable()}
                />

                <Button 
                    title="Find All"
                    onPress={() => this.getClientes()}
                />

                <Button 
                    title="Novo cliente"
                    onPress={() => this.props.navigation.navigate('ClienteCreateStack', {}, {
                        type: 'Navigate',
                        routeName: 'ClienteCreate',
                        params: { cliente: {}}
                    })} 
                />
                
            </View>
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
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dropTableClientes,
        getAllCientes,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TesteScreen);