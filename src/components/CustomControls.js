import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
    ButtonGroup,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    IconButton,
    Spacer,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import updateTodo from '../actions/updateTodo';

const CustomControls = ({ task, id }) => {
    const reference = useRef();
    const dispatch = useDispatch();
    const updateTaskConfirmation = () => {
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

export default CustomControls;
