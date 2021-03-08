import {
    Box,
    Flex,
    IconButton,
    ListItem,
    Spacer,
    useToast,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { IoReturnDownBack } from 'react-icons/io5';
import { TiTickOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import completeTodo from '../actions/completeToDo';
import deleteTodo from '../actions/deleteTodo';
import redoTodo from '../actions/redoTodo';
import CustomControls from './CustomControls';
import Selector from './Selector';

const ListItems = ({ task, id, status, urgency }) => {
    const urgencyStyling = () => {
        switch (urgency) {
            case 'Non-urgent':
                return 'nonUrgent';
            case 'Moderately Urgent':
                return 'moderatelyUrgent';
            case 'Urgent':
                return 'Urgent';
            default:
                return 'Non-urgent';
        }
    };

    const dispatch = useDispatch();
    const toast = useToast();

    const onClickDeleteTask = () => {
        dispatch(deleteTodo(id));
    };

    const onClickCompleteTask = () => {
        dispatch(completeTodo(id));
    };

    const onClickRedoTask = () => {
        dispatch(redoTodo(id));
    };

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

                            <CustomControls task={task} id={id} />
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
