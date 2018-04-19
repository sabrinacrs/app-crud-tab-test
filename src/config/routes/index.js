import { StackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import Fazenda from '../../Fazendas/components/Fazenda';
import FazendasList from '../../Fazendas/components/FazendasList';

export const FazendaStack = StackNavigator({
    Fazenda: {
        screen: Fazenda,
    }
});

const Routes = StackNavigator(
    {
        FazendaStack: { screen: FazendaStack },
        FazendasList: { screen: FazendasList },
        TabNavigator: { screen: TabNavigator }
    },
    {
        initialRouteName: 'TabNavigator',
        // mode: 'modal',
        // // headerMode: 'none',
    }
);

export default Routes;