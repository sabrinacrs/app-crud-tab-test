import { StackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import FazendaForm from '../../Fazendas/components/FazendaForm';
import FazendasList from '../../Fazendas/components/FazendasList';

export const FazendaStack = StackNavigator(
    {
        FazendaForm: {
            screen: FazendaForm,
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
        FazendaForm: { screen: FazendaForm },
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