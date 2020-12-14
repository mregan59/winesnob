import React from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native';
import { Layout, Text, } from '@ui-kitten/components';
import { FlexBox } from '../../components';

export const Description = ({ eva, children, onPress, ...rest }) => {
    const themedStyle = eva.style;
    return (

        <Layout level="3" style={themedStyle.container} {...rest}>
            <FlexBox aligncenter justifycenter >
                <Text category="s1" appearance={'alternative'}>{children}</Text>
            </FlexBox>
        </Layout>

    )
}
