import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//!components
import CustomControlsExample from './CustomControlsExample';
import Selector from './Selector';
//!actions
import deleteTodo from '../actions/deleteTodo';
import completeTodo from '../actions/completeToDo';
import redoTodo from '../actions/redoTodo';
import updateTodo from '../actions/updateTodo';
//!
import { TiTickOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import { IoReturnDownBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ListItem,
    Flex,
    Spacer,
    IconButton,
    useToast,
    Box,
} from '@chakra-ui/react';

const ListItems = ({ task, id, status, urgency }) => {
    // //! determine styling

    const urgencyStyling = (currentList) => {
        switch (urgency) {
            case 'Non-urgent':
                return 'nonUrgent';
            case 'Moderately Urgent':
                return 'moderatelyUrgent';
            case 'Urgent':
                return 'Urgent';
        }
    };

    //! init dispatch
    const dispatch = useDispatch();

    //! init toast function
    const toast = useToast();

    //!event handlers
    const onClickDeleteTask = () => {
        dispatch(deleteTodo(id));
    };

    const onClickCompleteTask = () => {
        dispatch(completeTodo(id));
    };

    const onClickRedoTask = () => {
        dispatch(redoTodo(id));
    };

    const onChangeUpdateTask = (e) => {
        dispatch(updateTodo(e.target.value, id));
    };

    //! init create chakra and framer motion component

    // //! on initial render, fade in
    // useEffect(() => {
    //     console.log('inital render');
    // });

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={id}
            >
                <Box
                    _hover={{
                        fontWeight: 'semibold',
                        backgroundColor: '#f1f0f0',
                        borderRadius: '5px',
                    }}
                >
                    <ListItem textStyle={urgencyStyling()}>
                        <Flex alignItems="center">
                            {status === 'complete' ? (
                                <IconButton
                                    aria-label="Complete Task"
                                    icon={<IoReturnDownBack color="orange" />}
                                    onClick={onClickRedoTask}
                                    fontSize="30px"
                                    variant="outline"
                                    color="yellow"
                                />
                            ) : (
                                <IconButton
                                    aria-label="Complete task"
                                    icon={<TiTickOutline color="green" />}
                                    onClick={onClickCompleteTask}
                                    fontSize="30px"
                                    variant="outline"
                                />
                            )}

                            <CustomControlsExample task={task} id={id} />
                            <Selector id={id} urgency={urgency} />
                            <Spacer />
                            <IconButton
                                icon={<VscChromeClose color="red" />}
                                colorScheme="blue"
                                variant="outline"
                                onClick={() => {
                                    onClickDeleteTask();
                                    toast({
                                        title: 'Task Deleted.',
                                        description: `You've deleted a task!`,
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                    });
                                }}
                            >
                                Delete
                            </IconButton>
                        </Flex>
                    </ListItem>
                </Box>
            </motion.div>
        </AnimatePresence>
    );
};

export default ListItems;
