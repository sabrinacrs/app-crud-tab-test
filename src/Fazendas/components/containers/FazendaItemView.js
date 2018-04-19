import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, } from 'react-native';
import styles from '../../../appStyle';

class FazendaItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const fazenda = this.props.fazenda;

        return (
            <TouchableHighlight style={styles.boxItemView} onPress={() => false}>
                <View>
                    <Text style={styles.regular}>{fazenda.nome}</Text>
                    <Text style={styles.regular}>Hectares: {fazenda.hectares}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

//#region Styles
// const styles = StyleSheet.create({
//     cliente: {
//         backgroundColor: '#fff',
//         height: 70,
//         paddingLeft: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 0.5,
//         borderColor: '#828282'
//     },

//     clienteInfo: {
//         paddingHorizontal: 10
//     },

//     clienteId: {
//         fontFamily: 'CircularStd-Bold',
//         color: '#4F5B66'
//     },

//     regular: {
//         fontFamily: 'CircularStd-Book',
//         color: '#4F5B66'
//     },

//     clienteName: {
//         fontFamily: 'CircularStd-Bold',
//         color: '#4F5B66'
//     },

//     clienteTelefone: {
//         fontFamily: 'CircularStd-Book',
//         color: '#4F5B66'
//     }
// });
//#endregion

export default FazendaItemView;