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

export const Home = props => {

    useEffect(() => {

    }, [])

    const { eva } = props;
    const themedStyle = eva.style;

    const navigateToWords = () => {
        props.navigation.navigate(AppRoute.WORDS);
    };



    const renderRightControl = () => {
        return (
            <TopNavigationAction
                icon={PersonIcon}
            />
        );
    };


    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                tabPadding
                showTitle={false}
                rightControl={renderRightControl}
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <Text>Home</Text>
                </Layout>
            </MainLayout>
            <BottomButton
                style={themedStyle.button}
                onPress={navigateToWords}
            >Go to Words</BottomButton>
        </View>
    );
};

