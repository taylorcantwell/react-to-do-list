import React from 'react';
import updateUrgency from '../actions/updateUrgency';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from '@chakra-ui/react';

const Selector = ({ id, urgency }) => {
    //! init dispatch
    const dispatch = useDispatch();

    //!event handler
    const urgencyChange = (urgency) => {
        console.log(urgency, id);
        dispatch(updateUrgency(id, urgency));
    };

    return (
        <>
            <Select
                display={[
                    'none', // 0-30em
                    'none', // 30em-48em
                    'block', // 48em-62em
                    'block', // 62em+
                ]}
                placeholder="Select urgency"
                w="35%"
                mr={4}
                value={urgency}
                onChange={(e) => {
                    urgencyChange(e.target.value);
                }}
            >
                <option value="Non-urgent">Non-urgent</option>
                <option value="Moderately Urgent">Moderately Urgent</option>
                <option value="Urgent">Urgent</option>
            </Select>

            <Select
                display={[
                    'block', // 0-30em
                    'block', // 30em-48em
                    'none', // 48em-62em
                    'none', // 62em+
                ]}
                placeholder=""
                w="35%"
                mr={4}
                value={urgency}
                onChange={(e) => {
                    urgencyChange(e.target.value);
                }}
            >
                <option value="Non-urgent">!</option>
                <option value="Moderately Urgent">!!</option>
                <option value="Urgent">!!!</option>
            </Select>
        </>
    );
};

export default Selector;
