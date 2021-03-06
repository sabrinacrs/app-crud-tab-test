import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { 
    clear, 
    getAllFazendas, 
    setFazendas,
    setAllFazendas,
    modifyTextSearch, 
    filterSearch, 
} from '../redux/actions/fazendaActions';
import FazendaItemView from './containers/FazendaItemView';

class FazendasList extends Component {
    constructor(props) {
        super(props);

        this.props.setAllFazendas();
    }

    filterSearch (text) {
        this.props.filterSearch(this.props.allFazendas, text);
    }

    refreshList () {
        // initial state
        this.props.clear();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    value={this.props.textSearch} 
                    onChangeText={(text) => this.filterSearch(text)}
                    onClear={() => this.refreshList()}
                    placeholder='Nome da fazenda...'
                />
                <ScrollView>
                    {this.props.fazendas.map(fazenda =>
                        <FazendaItemView
                            key={fazenda.id}
                            fazenda={fazenda}
                            navigation={this.props.navigation}
                        />
                    )}
                </ScrollView>

                <View>
                    <TouchableHighlight style={styles.btnAdd} onPress={() => navigate('FazendaStack', {}, {
                        type: 'Navigate',
                        routeName: 'FazendaStack',
                        params: {fazenda: {}}
                    })}>
                        <Text style={styles.textBtnAdd}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        paddingTop: (Platform.OS === 'ios') ? 50 : 20,
        padding: 10
    },

    clienteList: {
        flex: 2,
        // padding: 20
    },

    cliente: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#D3DDE8'
    },

    textInputBusca: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },

    btnSearch: {
        width: '20%',
        height: 50,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAdd: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#219653',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    textBtnAdd: {
        fontSize: 26,
        color: '#fff',
        position: 'absolute',
        bottom: 15,
        right: 23,
    }
});
//#endregion

function mapStateToProps(state) {
    return {
        fazendas: state.fazendaReducers.fazendas,
        allFazendas: state.fazendaReducers.allFazendas,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllFazendas,
        setAllFazendas,
        setFazendas,
        modifyTextSearch,
        filterSearch,
        clear
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FazendasList);