import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../appStyle';
import TalhaoFormView from './containers/TalhaoFormView';
import { clear, modifyField } from '../redux/actions/talhaoActions';

class Talhao extends Component {
    constructor(props) {
        super(props);

        // tem que ver de onde vai pegar o cliente logado, dono da fazenda
    }

    static navigationOptions = (props) => {
        // const { clear } = props;
        // console.log('ON NAVIGATION OPTIONS');
        // console.log(props);
        // console.log(this.clear);

        return {
            title: '',
            headerRight: (
                <TouchableHighlight
                    style={{ paddingRight: 20 }}
                    onPress={() => false}
                >
                    <Icon name="trash" size={30} color="#4F5B66" />
                </TouchableHighlight>
            ),
        };
    };

    render () {
        const fazenda = this.props.navigation.state.params.fazenda;
        console.log('ON FAZENDA');
        console.log(fazenda);

        return (
            <ScrollView>
                <FazendaFormView 
                    fazenda={fazenda} 
                    navigation={this.props.navigation}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Talhao);