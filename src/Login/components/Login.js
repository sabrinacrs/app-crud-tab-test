import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../../appStyle';
import {  } from '../redux/loginActions';

class Login extends Component {
    render() {
        return(
            <ScrollView>
                <View>
                    <TextInput 
                        style={styles.input}
                    />
                </View>
            </ScrollView>
        );
    }
}

