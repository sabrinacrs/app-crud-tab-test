import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import styles from "./appStyle";
import store from './config/redux/store';
import ClienteCreate from './Cliente/components/ClienteCreate';
import Routes from './config/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ClienteCreate /> */}
        <Routes />
      </Provider>
      // <View>
      //   <Text style={styles.title}>
      //     Title
      //   </Text>
      //   <Text style={styles.label}>
      //     Label
      //   </Text>
      //   <Text style={styles.regular}>
      //     Regular
      //   </Text>
      // </View>
    );
  }
}
