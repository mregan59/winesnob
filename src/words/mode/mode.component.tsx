import React, { useRef } from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { FlexBox } from '../../components';
import { RefreshIcon } from '../../assets/icons';




export const Mode = ({ eva, mode, onPress, isActive }) => {
    const refreshRef = useRef(null)
    const themedStyle = eva.style;
    const onPressTouchable = () => {
        onPress(mode);
    }
    return (
        <TouchableWithoutFeedback onPress={onPressTouchable}>
            <FlexBox justifycenter aligncenter >
                <FlexBox style={themedStyle.mode} w100 justifycenter aligncenter >
                    {isActive && <Icon name="refresh-outline"
                        ref={refreshRef}
                        style={themedStyle.icon}
                        fill='#fff'></Icon>}
                </FlexBox>
                <Text style={themedStyle.header}>{mode.name}</Text>
            </FlexBox>
        </TouchableWithoutFeedback>
    )
}
