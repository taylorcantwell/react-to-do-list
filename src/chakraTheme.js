import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    textStyles: {
        nonUrgent: {
            color: 'blue.500',
        },
        moderatelyUrgent: {
            color: 'orange.500',
        },
        Urgent: {
            color: 'red.500',
        },
    },
});

export default theme;
