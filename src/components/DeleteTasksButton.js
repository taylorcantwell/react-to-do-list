import React from 'react';
import { useDispatch } from 'react-redux';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';

import deleteAllTodo from '../actions/deleteAllTodo';
import { useSelector } from 'react-redux';

const DeleteTasksButton = () => {
    //! init dispatch
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    //!Grab task count from state
    const tasks = useSelector((state) => {
        return state.tasks;
    });

    return (
        <>
            <Button
                colorScheme="red"
                onClick={() => setIsOpen(true)}
                isDisabled={!tasks.length}
                mt={5}
            >
                Delete all tasks
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete all tasks?
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => {
                                    onClose();
                                    dispatch(deleteAllTodo());
                                }}
                                ml={3}
                            >
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteTasksButton;
