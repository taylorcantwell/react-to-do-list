import { ChakraProvider, Container, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import theme from './chakraTheme';
import AddTask from './components/AddTask';
import DeleteTasksButton from './components/DeleteTasksButton';
import TabBar from './components/TabBar.js';

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
