import React from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native';
import { Layout, Text, } from '@ui-kitten/components';
import { FlexBox } from '../../components';

export const Option = ({ eva, wine, onPress, }) => {




    const themedStyle = eva.style;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Layout style={themedStyle.card} level="1">
                <FlexBox w100 justifycenter aligncenter >
                    <Image source={wine.image} />
                    <Text>{wine.type}</Text>
                </FlexBox>
            </Layout>
        </TouchableWithoutFeedback>
    )
}
