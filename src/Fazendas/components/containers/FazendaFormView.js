import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';

import styles from '../../../appStyle';
import Fazenda from '../../../models/Fazenda';
import { modifyField, clear } from '../../redux/actions/fazendaActions';

class FazendaFormView extends Component {
    constructor(props) {
        super(props);

        // incializa isUpdate com false - se for true, será alterado em this.setFazenda
        this.state = { isUpdate: false };

        // carrega campos para update
        this.setFazenda();
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

    setFazenda() {
        if(this.props.fazenda.nome != undefined) {
            const { nome, hectares, telefone, email, enderecoWeb, bairro, cidade, uf} = this.props.fazenda;    

            // set Fields
            this.props.modifyField('nome', nome);
            this.props.modifyField('hectares', hectares);
            this.props.modifyField('telefone', telefone);
            this.props.modifyField('email', email);
            this.props.modifyField('enderecoWeb', enderecoWeb);
            this.props.modifyField('bairro', bairro);
            this.props.modifyField('cidade', cidade);
            this.props.modifyField('uf', uf);

            this.setState({isUpdate: true});
        }
    }

    setField(field, value) {
        this.props.modifyField(field, value);
    }

    updateFazenda() {
        // pega todos os campos e cria nova fazenda com o id da que ja tem na props
        const { nome, hectares, telefone, email, enderecoWeb, bairro, cidade, uf} = this.props;
        const clienteId = 1; // o cliente não muda
        const hectaresFloat = (hectares == "") ? 0 : parseFloat(hectares);
        const fazenda = new Fazenda(nome, hectaresFloat, telefone, email, enderecoWeb, cidade, uf, bairro, clienteId );

        if(this.formValidate()) {
            this.props.updateFazenda(fazenda);
        }
        alert('UDPDATE');
    }

    saveNewFazenda() {
        const { nome, hectares, telefone, email, enderecoWeb, bairro, cidade, uf} = this.props;
        const clienteId = 1; // pega id do cliente da sessão, que vem por props ou sei lá
        // parse hectares
        const hectaresFloat = (hectares == "") ? 0 : parseFloat(hectares.replace("R$", ""));

        // nova fazenda
        const newFazenda = new Fazenda(nome, hectaresFloat, telefone, email, enderecoWeb, cidade, uf, bairro, clienteId);

        if(formValidate()) {
            this.props.saveFazenda(newFazenda);

            // clear fields 
            this.props.clear();
        }
        alert('NEW FAZENDA');
    }

    render() {
        return (
            <View>
                <ScrollView> 
                    <View style={styles.boxForm}>
                        <View style={styles.groupInput}>
                            <Hoshi
                                value={this.props.nome}
                                onChangeText={(text) => this.setField('nome', text)}
                                label={'Nome'}
                                borderColor={(this.props.nomeIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                            />
                            {
                                (this.props.nomeIsValid) ? null: 
                                <Text style={styles.labelDanger}>* Campo obrigatório</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.hectares}
                                onChangeText={(text) => this.setField('hectares', text)}
                                type={'money'}
                                options={{
                                    format: '0,00'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'Hectares',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'Roboto-Regular' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='numeric'
                            />
                        </View>

                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.telefone}
                                onChangeText={(text) => this.setField('telefone', text)}
                                type={'cel-phone'}
                                options={{
                                    format: '(99) 99999-9999'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'Telefone',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'Roboto-Regular' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='phone-pad'
                                maxLength={15}
                            />
                            {
                                (this.props.telefoneIsValid) ? null: 
                                <Text style={styles.labelDanger}>* Telefone inválido</Text>
                            }
                        </View>

                         <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.email}
                                onChangeText={(text) => this.setField('email', text)}
                                label={'E-mail'}
                                // borderColor={(this.props.emailIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                                keyboardType='email-address'
                            />
                            {
                                (this.props.emailIsValid) ? null: 
                                <Text style={styles.labelDanger}>* E-mail inválido</Text>
                            }
                        </View>

                        <View style={styles.groupInput}>
                            <Hoshi
                                value={this.props.enderecoWeb}
                                onChangeText={(text) => this.setField('enderecoWeb', text)}
                                label={'Endereço Web'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                            />
                        </View>
                        
                        <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.bairro}
                                onChangeText={(text) => this.setField('bairro', text)}
                                label={'Bairro'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                            />
                        </View>
                        
                        <View style={styles.groupInputRow}>
                            <View style={[ styles.groupInput, {width: '75%'} ]}>
                                <Hoshi 
                                    value={this.props.cidade}
                                    onChangeText={(text) => this.setField('cidade', text)}
                                    label={'Cidade'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                    inputStyle={styles.textInputs}
                                />
                            </View>

                            <View style={[ styles.groupInput, {width: '20%'} ]}>
                                <Hoshi 
                                    value={this.props.uf}
                                    onChangeText={(text) => this.setField('uf', text)}
                                    label={'UF'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                    inputStyle={styles.textInputs}
                                    maxLength={2}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button 
                        title={(this.state.isUpdate) ? 'Atualizar' : 'Cadastrar'}
                        color="#219653" 
                        onPress={() => { (this.state.isUpdate) ? this.updateFazenda() : this.saveNewFazenda() }}
                    />
                </View>
            </View>
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
        modifyField,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FazendaFormView);