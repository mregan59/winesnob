import React from 'react'
import { View, Text } from 'react-native';

import { Button } from '@ui-kitten/components';



export const Fab = props => {
    const { eva, ...rest } = props;
    const themedStyle = eva.style;
    return (
        <Button style={{ ...themedStyle.container, ...props.style }} {...rest} />
    )
}
