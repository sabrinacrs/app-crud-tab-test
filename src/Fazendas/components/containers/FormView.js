import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';

import { modifyField } from '../../redux/actions/fazendaActions';

class FormView extends Component {
    constructor(props) {
        super(props);
    }

    setField(field, value) {
        this.props.modifyField(field, value);
    }

    render() {
        return (
            <View>
                <ScrollView style={styles.main}> 
                    <View style={styles.content}>
                        <View style={styles.groupInput}>
                            <Hoshi
                                value={this.props.nome}
                                onChangeText={(text) => this.setNome(text)}
                                label={'Nome'}
                                borderColor={(this.props.nomeIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                            />
                            {
                                (this.props.nomeIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Campo obrigatório</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.hectares}
                                onChangeText={(text) => this.modifyField('hectares', text)}
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
                            <Hoshi 
                                value={this.props.email}
                                onChangeText={(text) => this.setEmail(text)}
                                label={'E-mail'}
                                // borderColor={(this.props.emailIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'Roboto-Regular' }}
                                inputStyle={styles.textInputs}
                                keyboardType='email-address'
                            />
                            {
                                (this.props.emailIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* E-mail inválido</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.telefone}
                                onChangeText={(text) => this.setTelefone(text)}
                                type={'cel-phone'}
                                options={{
                                    format: '(99) 99999-9999'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'Telefone',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'CircularStd-Book' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='phone-pad'
                                maxLength={15}
                            />
                            {
                                (this.props.telefoneIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Telefone inválido</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.cpfCnpj}
                                onChangeText={(text) => this.setCpfCnpj(text)}
                                label={'CPF/CNPJ'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                                keyboardType='numeric'
                                maxLength={20}
                            />
                            {
                                (this.props.cpfCnpjIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Dados inválidos</Text>
                            }
                        </View>

                        <View style={styles.groupInputRow}>
                            <View style={[styles.groupInput, {width: '75%'}]}>
                                <Hoshi 
                                    value={this.props.endereco}
                                    onChangeText={(text) => this.setEndereco(text)}
                                    label={'Endereço'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                />
                            </View>

                            <View style={[styles.groupInput, {width: '20%'}]}>
                                <TextInputMask
                                    value={this.props.numero}
                                    onChangeText={(text) => this.setNumero(text)}
                                    type={'only-numbers'}
                                    customTextInput={Hoshi}
                                    customTextInputProps={{
                                        label: 'Nº',
                                        borderColor: '#00798c',
                                        labelStyle: { fontFamily: 'CircularStd-Book' },
                                        inputStyle: styles.textInputs,
                                    }}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        
                        <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.bairro}
                                onChangeText={(text) => this.setBairro(text)}
                                label={'Bairro'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                            />
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask
                                value={this.props.cep}
                                onChangeText={(text) => this.setCep(text)}
                                type={'zip-code'}
                                options={{
                                    format: '99999-999'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'CEP',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'CircularStd-Book' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='numeric'
                            />
                        </View>
                        
                        <View style={styles.groupInputRow}>
                            <View style={[ styles.groupInput, {width: '75%'} ]}>
                                <Hoshi 
                                    value={this.props.cidade}
                                    onChangeText={(text) => this.setCidade(text)}
                                    label={'Cidade'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                />
                            </View>

                            <View style={[ styles.groupInput, {width: '20%'} ]}>
                                <Hoshi 
                                    value={this.props.uf}
                                    onChangeText={(text) => this.setUf(text)}
                                    label={'UF'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                    maxLength={2}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button 
                        title={(isUpdate) ? 'Atualizar' : 'Cadastrar'}
                        color="#219653" 
                        onPress={() => { (isUpdate) ? this.updateCliente() : this.saveNewCliente() }}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        nome: state.fazendaReducers.nome,
        hectares: state.fazendaReducers.hectares,
        cidade: state.fazendaReducers.cidade,
        uf: state.fazendaReducers.uf,
        bairro: state.fazendaReducers.bairro,
        email: state.fazendaReducers.email,
        enderecoWeb: state.fazendaReducers.enderecoWeb,
        telefone: state.fazendaReducers.telefone,
        cliente: state.fazendaReducers.cliente,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modifyField
    }
}

export default connect()(FormView);