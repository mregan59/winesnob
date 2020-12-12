import React from 'react';
import { Button } from '@ui-kitten/components';

const BottomButton = props => {

    const { eva } = props;
    const themedStyle = eva.style;

    return (
        <Button {...props}
            style={{ ...themedStyle.button, ...props.style }}
        >{props.children}</Button>
    );
};

export default BottomButton;

