import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';

import styles from '../../../appStyle';
import Talhao from '../../../models/Talhao';
import { 
    modifyField, 
    clear, 
    saveTalhao, 
    updateTalhao,
    setTalhao,
    setUpdate,
} from '../../redux/actions/talhaoActions';

class TalhaoFormView extends Component {
    constructor(props) {
        super(props);

        this.setTalhao();
    }

    formValidate() {
        let flag = true;

        // valida nome
        if(this.props.descricao.length < 3) {
            this.props.modifyField('descricao', this.props.descricao);
            flag = false;
        }

        // valida hectares

        return flag;
    }

    setTalhao() {
        if(this.props.talhao.descricao != undefined) {
            const { descricao, tamanho } = this.props.talhao;    

            // set Fields
            this.props.modifyField('descricao', descricao);
            this.props.modifyField('tamanho', tamanho);

            this.props.setUpdate(true);
        }
    }

    setField(field, value) {
        this.props.modifyField(field, value);
    }

    updateTalhao() {
        // pega todos os campos e cria nova fazenda com o id da que ja tem na props
        const { descricao, tamanho } = this.props;
        const fazendaId = 1; // a fazenda pode mudar
        const tamanhoFloat = (tamanho == "") ? 0 : parseFloat(tamanho);
        const talhao = new Talhao(descricao, tamanhoFloat);
        talhao.id = this.props.talhao.id;

        if(this.formValidate()) {
            this.props.updateTalhao(talhao);
        }
        alert('UDPDATE');
    }

    saveNewTalhao() {
        const { descricao, tamanho} = this.props;
        const fazendaId = 1; // pega id do cliente da sessão, que vem por props ou sei lá
        // parse hectares
        const tamanhoFloat = (tamanho == "") ? 0 : parseFloat(tamanho.replace("R$", "").replace(".", "").replace(",", "."));

        // novo talhao
        const newTalhao = new Talhao(descricao, tamanhoFloat);

        if(this.formValidate()) {
            this.props.saveTalhao(newTalhao);

            // clear fields 
            this.props.clear();
        }
        
        alert('Talhão ' + newTalhao.descricao + " criado!");
        this.props.navigation.navigate('TalhoesList');
    }

    render() {
        return (
            <View>
                <ScrollView> 
                    <View style={styles.boxForm}>
                        <View style={styles.groupInput}>
                            <Hoshi
                                value={this.props.descricao}
                                onChangeText={(text) => this.setField('descricao', text)}
                                label={'Descrição'}
                                borderColor={(this.props.nomeIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                            />
                            {
                                (this.props.descricaoIsValid) ? null: 
                                <Text style={styles.labelDanger}>* Campo obrigatório</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.tamanho}
                                onChangeText={(text) => this.setField('tamanho', text)}
                                type={'money'}
                                options={{
                                    format: '0,00'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'Tamanho',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'Roboto-Regular' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button 
                        title={(this.props.isUpdate) ? 'Atualizar' : 'Cadastrar'}
                        color="#219653" 
                        onPress={() => { (this.props.isUpdate) ? this.updateTalhao() : this.saveNewTalhao() }}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        nome: state.talhaoReducers.descricao,
        tamanho: state.talhaoReducers.tamanho,
        cliente: state.talhaoReducers.cliente,
        fazenda: state.talhaoReducers.fazenda,
        isUpdate: state.fazendaReducers.isUpdate,
        
        descricaoIsValid: state.talhaoReducers.descricaoIsValid,
        tamanhoIsValid: state.talhaoReducers.tamanhoIsValid,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clear,
        modifyField,
        saveTalhao,
        updateTalaho,
        setTalhao,
        setUpdate,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TalhaoFormView);