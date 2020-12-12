import { dimensions, variables, spacing } from '../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Words } from './words.screen';

export const ThemedWords = withStyles(Words, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
}));
