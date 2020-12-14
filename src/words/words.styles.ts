import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Words } from './words.screen';

export const ThemedWords = withStyles(Words, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: spacing(2),
    },
    header: {
        textAlign: 'center',
    },
    modeContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 60,
        right: 0,
        left: 0,
    },
}));
