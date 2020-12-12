import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { SettingsIcon, PersonIcon } from '../assets/icons';
import { FlexBox, Spacer, BottomButton } from '../components';

export const Words = props => {

    useEffect(() => {

    }, [])

    const { eva } = props;
    const themedStyle = eva.style;

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <Text>Words</Text>
                </Layout>
            </MainLayout>

        </View>
    );
};

