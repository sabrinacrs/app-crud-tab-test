import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';

import styles from '../../appStyle';
import FormView from './containers/FormView';
import { clear, modifyField } from '../redux/actions/fazendaActions';
import { validateEmail } from '../../../utils/validate';

class Fazenda extends Component {
    constructor(props) {
        super(props);

        // tem que ver de onde vai pegar o cliente logado, dono da fazenda
    }

    formValidate() {
        let flag = true;

        // valida nome
        if(this.props.nome.length < 3) {
            this.props.modifyField('nome', this.props.nome);
        }

        // valida hectares

        // valida email
        if(this.props.email != "" && !validateEmail(this.props.email)) {
            this.props.modifyField('email', this.props.email);
        }

        // valida cidade
        if(this.props.cidade != "" && this.props.cidade.length < 3) {
            this.props.modifyField('cidade', this.props.cidade);
        }

        // valida uf
        if(this.props.uf != "" && this.props.uf.length < 2) {
            this.props.modifyField('uf', this.props.uf);
        }

        // valida telefone
        if(this.props.telefone != "" && this.props.telefone.length < 14) {
            this.props.modifyField('telefone', this.props.telefone);
        }
    }

    render () {
        return (
            <ScrollView>
                <View>
                </View>
            </ScrollView>
        );
    }
}


function mapStateToProps(state) {
    return {
        nome: state.fazendaReducers.nome,
        email: state.fazendaReducers.email,
        hectares: state.fazendaReducers.hectares,
        cidade: state.fazendaReducers.cidade,
        uf: state.fazendaReducers.uf,
        bairro: state.fazendaReducers.bairro,
        email: state.fazendaReducers.email,
        enderecoWeb: state.fazendaReducers.enderecoWeb,
        telefone: state.fazendaReducers.telefone,
        cliente: state.fazendaReducers.cliente,
        
        nomeIsValid: state.fazendaReducers.nomeIsValid,
        emailIsValid: state.fazendaReducers.emailIsValid,
        hectaresIsValid: state.fazendaReducers.hetaresIsValid,
        ufIsValid: state.fazendaReducers.ufIsValid,
        telefoneIsValid: state.fazendaReducers.telefoneIsValid,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clear,
        modifyField
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Fazenda);