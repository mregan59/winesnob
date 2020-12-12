import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { Home } from '../home';
import { Words } from '../words';
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.HOME]: undefined;
    [AppRoute.WORDS]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
    props: Partial<StackNavigatorProps>
): React.ReactElement => (
        <Stack.Navigator {...props} headerMode="none">
            <Stack.Screen name={AppRoute.HOME} component={Home} />
            <Stack.Screen name={AppRoute.WORDS} component={Words} />
        </Stack.Navigator>
    );
