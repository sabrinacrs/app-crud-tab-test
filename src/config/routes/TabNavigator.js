import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Home from '../../Home/home';
import FazendasList from '../../Fazendas/components/FazendasList';


export default TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
            }
        },

        // FazendasList: {
        //     screen: FazendasList,
        //     navigationOptions: {
        //         tabBarLabel: 'Fazendas',
        //     }
        // }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        
        tabBarOptions: {
            activeTintColor: "#4fab5b",
            inactiveTintColor: '#333',
            renderIndicator: () => null,
            style: { 
                backgroundColor: '#fff',
            },
        },
    },
);