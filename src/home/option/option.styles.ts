import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Option } from './option.component';
const optionMargin = 16;

const cardWidth =
    (dimensions.fullWidth - variables.sideMargin * 2 - optionMargin * 2) / 3;

export const ThemedOption = withStyles(Option, (theme) => ({
    card: {
        borderRadius: variables.borderRadius2,
        padding: spacing(2),
        // borderTopLeftRadius: 0,
        // borderBottomLeftRadius: 0,
        //  marginRight: spacing(1),
        // paddingLeft: variables.sideMargin,
        width: cardWidth,
    },
}));
