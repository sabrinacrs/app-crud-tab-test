import { StackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import Fazenda from '../../Fazendas/components/Fazenda';
import FazendasList from '../../Fazendas/components/FazendasList';

export const FazendaCreateStack = StackNavigator({
    Fazenda: {
        screen: Fazenda,
    }
});

const Routes = StackNavigator(
    {
        FazendasList: { screen: FazendasList },
        TabNavigator: { screen: TabNavigator }
    },
    {
        initialRouteName: 'TabNavigator',
    }
);

export default Routes;