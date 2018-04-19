import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';

import { modifyField, clear } from '../../redux/actions/fazendaActions';

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
                                onChangeText={(text) => this.setField('nome', text)}
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
                                <Text style={estilos.labelDanger}>* E-mail inválido</Text>
                            }
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
                                <Text style={estilos.labelDanger}>* Telefone inválido</Text>
                            }
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
                        title={(isUpdate) ? 'Atualizar' : 'Cadastrar'}
                        color="#219653" 
                        onPress={() => false}
                        // onPress={() => { (isUpdate) ? this.updateCliente() : this.saveNewCliente() }}
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
    return {
        clear,
        modifyField
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormView);