import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import TesteScreen from '../../Cliente/components/TesteScreen';
import ClienteUpdate from '../../Cliente/components/ClienteUpdate';
import ClienteCreate from '../../Cliente/components/ClienteCreate';

export const ClienteUpdateStack = StackNavigator({
    ClienteUpdate: {
        screen: ClienteUpdate,
    }
});

export const ClienteCreateStack = StackNavigator({
    ClienteCreate: {
        screen: ClienteCreate,
    }
});

export const Routes = StackNavigator(
    {
        TesteScreen: {
            screen: TesteScreen,
        },

        ClienteUpdateStack: {
            screen: ClienteUpdateStack,
        },

        ClienteCreateStack: {
            screen: ClienteCreateStack,
        }
    },
    {
        initialRouteName: 'TesteScreen',
        mode: 'modal',
        headerMode: 'none',
    }
);



function paramsToProps (SomeComponent) { 
    // turns this.props.navigation.state.params into this.params.<x>
    return class extends Component {
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

export default Routes;