import React, { useEffect, useState, useRef } from 'react';
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
import { Mode } from './mode';
import { Description } from './description';
import Carousel from 'react-native-snap-carousel';
import { dimensions } from '../shared/variables';
import { shuffle } from 'underscore';

const modes = [
    {
        color: 'green',
        adjectives: {
            red: [
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
            ],
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
        },
        name: 'Snob',
        key: 'Snob'
    },
    {
        color: 'green',
        adjectives: {
            red: [
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
            ],
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
        },
        name: 'Drunk Mom',
        key: 'drunk-mom'
    },
    {
        color: 'blue',
        adjectives: {
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',

            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',

            ],
        },
        name: 'Beer Lover',
        key: 'beer-lover'
    },
    {
        color: 'red',
        adjectives: {
            red: [
                'crabby grapes most likely',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',


            ],
            rose: [
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'tannins are very strong',

            ],
        },
        name: 'idiot',
        key: 'idiot'
    },
    {
        color: 'orange',
        adjectives: {
            red: [
                'tannins are very strong',
                'a little tight',
                'very red',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
            ],
            white: [
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'a little hoppy',
                'the fingers look great',
                'and the legs. wow!',
            ],
        },
        name: 'Drunk Girl',
        key: 'drunk-girl'
    },
    {
        color: 'hotpink',
        adjectives: {
            red: [
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
            ],
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
        },
        name: 'Somalia',
        key: 'somalia'
    }, {
        color: 'aqua',
        adjectives: {
            red: [
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
            ],
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
        },
        name: 'Drunk Guy',
        key: 'drunk-guy'
    }, {
        color: 'teal',
        adjectives: {
            red: [
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
            ],
            white: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
            rose: [
                'a little tight',
                'very red',
                'the fingers look great',
                'and the legs. wow!',
                'a little hoppy',
                'needs more hops',
                'the grapes seems a little old',
                'crabby grapes most likely',
                'tannins are very strong',
            ],
        },
        name: 'British Snob',
        key: 'british-snob'
    },
];

export const Words = props => {
    const { wine } = props.route.params;
    const [selectedMode, setSelectedMode] = useState(modes[0])
    const [data, setData] = useState(modes.filter(mode => {
        let adjs = mode.adjectives[wine.key];
        return adjs !== undefined && adjs && adjs.length > 0;

    }));
    const [adjectives, setAdjectives] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        const mode = modes.find(mode => mode.key == selectedMode.key);
        const adjs = Object.keys(mode?.adjectives).filter(key => {
            return key == wine.key
        });

        if (adjs.length > 0) {
            const adjsFiltered = mode?.adjectives[adjs[0]].filter((a, i) => i < 5);
            setAdjectives(adjsFiltered);
        } else {
            setAdjectives(null);
        }

    }, [selectedMode])

    const { eva } = props;
    const themedStyle = eva.style;
    /* Randomize array in-place using Durstenfeld shuffle algorithm */


    const changeMode = mode => {
        //setSelectedMode(mode);
        const modeIndex = data.findIndex(m => m.key == mode.key);
        if (carouselRef.current.currentIndex != modeIndex && modeIndex >= 0) {
            carouselRef.current.snapToItem(modeIndex);
            console.log('snapp!')
        } else {
            const shuffled = shuffle(adjectives);
            setAdjectives(shuffled);
        }

    }

    const renderItem = ({ item, index }) => {
        return <Mode isActive={selectedMode.key == item.key} mode={item} onPress={changeMode}>{item.name}</Mode>

    }

    const renderAdjectives = () => {
        if (adjectives && adjectives.length > 0) {
            return adjectives.map((adj, i) => <Description key={i}>{adj}</Description>)
        }
        return null;

    }

    const renderCarousel = () => {

        const onBeforeSnapToItem = index => {
            console.log('before snap!')
            setSelectedMode(data[index])
        }
        return (
            <Carousel
                //loop={true}
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                sliderWidth={dimensions.fullWidth}
                itemWidth={dimensions.fullWidth / 4.2}
                onBeforeSnapToItem={onBeforeSnapToItem}
            />)
    }

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                padding={null}
                title={wine.type}
                {...props}
            >
                <Layout level="1" style={[themedStyle.innerContainer, { backgroundColor: selectedMode.color }]}>
                    {renderAdjectives()}

                </Layout>

            </MainLayout>
            <FlexBox style={themedStyle.modeContainer}>
                {renderCarousel()}
            </FlexBox>

            {/* <ScrollView  bounces contentContainerStyle={themedStyle.modeFlexContainer} horizontal>{renderModes()}</ScrollView> */}
        </View>
    );
};

