import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Home extends Component {
    render () {
        const { navigate } = this.props.navigation; 

        return (
            <View style={styles.container}>
                
                <TouchableHighlight onPress={() => navigate('FazendasList')}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Fazendas</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 20,
        fontFamily: 'CircularStd-Book',
        color: '#30638e'
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
    }
});

export default Home;