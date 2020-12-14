import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Mode } from './mode.component';

const modeMargin = spacing(3);
const width = (dimensions.fullWidth - modeMargin * 4) / 4;

export const ThemedMode = withStyles(Mode, (theme) => ({
    mode: {
        borderRadius: width / 2,
        height: width,
        width: width,
        margin: modeMargin,
        borderWidth: 3,
        borderColor: 'white',
    },
    header: {
        color: 'white',
    },
    icon: {
        width: 24,
        height: 24,
    },
}));
