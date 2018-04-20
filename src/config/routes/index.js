import { StackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import Fazenda from '../../Fazendas/components/Fazenda';
import FazendasList from '../../Fazendas/components/FazendasList';

export const FazendaStack = StackNavigator(
    {
        Fazenda: {
            screen: Fazenda,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export const FazendasListStack = StackNavigator({
    FazendasList: {
        screen: FazendasList,
    }
});

const Routes = StackNavigator(
    {
        Fazenda: { screen: Fazenda },
        FazendaStack: { screen: FazendaStack },
        FazendasList: { screen: FazendasList },
        TabNavigator: { screen: TabNavigator },
        FazendasListStack: { screen: FazendasListStack },
    },
    {
        initialRouteName: 'TabNavigator',
    }
);

export default Routes;