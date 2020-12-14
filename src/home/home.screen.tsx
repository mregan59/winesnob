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
import { Option } from './option';

export const Home = props => {

    useEffect(() => {

    }, [])

    const { eva } = props;
    const themedStyle = eva.style;



    const wines = [
        { type: 'Red', key: 'red', image: require('../assets/red.png'), },
        { type: 'White', key: 'white', image: require('../assets/white.png'), },
        { type: 'Rose', key: 'rose', image: require('../assets/rose.png'), },

    ]


    const navigateToWords = (wine: any) => {
        props.navigation.navigate(AppRoute.WORDS, { wine: wine });
    }

    const renderWines = wines.map(wine =>
        <Option key={wine.type} wine={wine} onPress={() => navigateToWords(wine)}></Option>
    )


    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                tabPadding
                showTitle={true}

                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <FlexBox row aligncenter justifybetween>
                        {renderWines}
                    </FlexBox>
                </Layout>
            </MainLayout>
        </View>
    );
};

