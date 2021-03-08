import {
    Button,
    Flex,
    FormControl,
    Input,
    Spacer,
    useToast,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addTodo from '../actions/addTodo';
import inputUser from '../actions/inputUser';

const AddTask = () => {
    const dispatch = useDispatch();
    const taskInput = useSelector((state) => {
        return state.input;
    });

    const reference = useRef(null);
    useEffect(() => {
        reference.current.focus();
    });

    const onChangeAddTaskHandler = (e) => {
        dispatch(inputUser(e.target.value));
    };

    const onClickAddTaskHandler = () => {
        dispatch(addTodo(taskInput));
        dispatch(inputUser(''));
    };

    const toast = useToast();

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
