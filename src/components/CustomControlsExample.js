import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import updateTodo from '../actions/updateTodo';
import {
    Editable,
    EditableInput,
    EditablePreview,
    ButtonGroup,
    Flex,
    IconButton,
    Spacer,
} from '@chakra-ui/react';

import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const CustomControlsExample = ({ task, id }) => {
    //! init useRef
    const reference = useRef();
    //! init dispatch
    const dispatch = useDispatch();
    /* Here's a custom control */
    const updateTaskConfirmation = () => {
        console.log(reference.current.value, id);
        dispatch(updateTodo(reference.current.value, id));
    };

    function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton
                    type="submit"
                    icon={<CheckIcon />}
                    onClick={() => {
                        updateTaskConfirmation();
                        onSubmit();
                    }}
                />
                <IconButton icon={<CloseIcon />} onClick={onCancel} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton size="sm" icon={<EditIcon />} onClick={onEdit} />
            </Flex>
        );
    }

    return (
        <Editable
            textAlign="center"
            defaultValue={task}
            fontSize="normal"
            isPreviewFocusable={false}
            submitOnBlur={false}
            w="100%"
            mx={5}
            onSubmit={updateTaskConfirmation}
        >
            {(props) => (
                <>
                    <Flex>
                        <EditablePreview mr={5} />
                        <EditableInput mr={5} ref={reference} type="text" />
                        <Spacer />
                        <EditableControls {...props} />
                    </Flex>
                </>
            )}
        </Editable>
    );
};

export default CustomControlsExample;
