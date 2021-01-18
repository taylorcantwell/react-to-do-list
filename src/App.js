import React from 'react';

import TabBar from './components/TabBar.js';
import DeleteTasksButton from './components/DeleteTasksButton';
import AddTask from './components/AddTask';
import { ChakraProvider, Container, Heading, Divider } from '@chakra-ui/react';
import theme from './chakraTheme';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxWidth={900} mt={5}>
                <Heading fontWeight="light">Todo List</Heading>
                <AddTask />
                <TabBar />
                <Divider />
                <DeleteTasksButton />
            </Container>
        </ChakraProvider>
    );
};

export default App;
