import { dimensions, variables, spacing } from '../../shared/variables';
import { withStyles } from '@ui-kitten/components';
import { Description } from './description.component';

export const ThemedDescription = withStyles(Description, (theme) => ({
    container: {
        padding: spacing(2),
        margin: spacing(1),
        borderRadius: variables.borderRadius1,
        backgroundColor: 'rgba(0,0,0,.2)',
    },
}));
