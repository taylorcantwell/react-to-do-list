import React, { useRef, useEffect } from 'react';
import {
    Flex,
    Spacer,
    Button,
    Input,
    FormControl,
    useToast,
} from '@chakra-ui/react';

//! actions
import inputUser from '../actions/inputUser';
import addTodo from '../actions/addTodo';

import { useSelector, useDispatch } from 'react-redux';

const AddTask = () => {
    //! init useDispatch hook
    const dispatch = useDispatch();

    //! Grab from state
    const taskInput = useSelector((state) => {
        return state.input;
    });

    const tasks = useSelector((state) => {
        return state;
    });

    //!focus on the input by using useRef and after it's render, use useEffect to focus it!
    const reference = useRef(null);
    useEffect(() => {
        reference.current.focus();
    });

    //!event handlers
    const onChangeAddTaskHandler = (e) => {
        dispatch(inputUser(e.target.value));
    };

    const onClickAddTaskHandler = () => {
        dispatch(addTodo(taskInput));
        dispatch(inputUser(''));
    };

    const toast = useToast();

    //! if task input is false, disable add button
    //!clear input when user presses the add button by updating piece of state to " "

    return (
        <FormControl id="task" my={5}>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onClickAddTaskHandler();
                }}
            >
                <Flex>
                    <Input
                        onChange={onChangeAddTaskHandler}
                        placeholder="Enter a task"
                        mr="25px"
                        value={taskInput}
                        type="text"
                        ref={reference}
                    />
                    <Spacer />
                    <Button
                        colorScheme="blue"
                        variant="outline"
                        px="50px"
                        textAlign="center"
                        isDisabled={!taskInput}
                        onClick={() => {
                            onClickAddTaskHandler();
                            toast({
                                title: 'Task Added.',
                                description: `You've added a new task!`,
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            });
                        }}
                    >
                        Add
                    </Button>
                </Flex>
            </form>
        </FormControl>
    );
};

export default AddTask;
