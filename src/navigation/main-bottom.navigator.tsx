import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoute } from './app-routes';
import { Home } from '../home';
import { LayoutIcon, PersonIcon, PlusIcon, HomeIcon } from '../assets/icons';
import { BottomTabs } from './bottom-tabs';

const BottomTab = createBottomTabNavigator();

export const MainBottomNavigator = (): React.ReactElement => (
    <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
        {/* <BottomTab.Screen
            name={AppRoute.ORDER_HISTORY}
            component={OrderHistory}
            options={{ title: 'Orders', tabBarIcon: LayoutIcon }}
        /> */}
        {/* <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeNavigator}
            options={{ title: 'Beer', tabBarIcon: HomeIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.ORDER}
            component={OrderNavigator}
            options={{ title: 'Order', tabBarIcon: PlusIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.SETTINGS}
            component={Settings}
            options={{ title: 'Settings', tabBarIcon: PersonIcon }}
        /> */}
    </BottomTab.Navigator>
);
