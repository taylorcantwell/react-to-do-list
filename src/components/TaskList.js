import React from 'react';
import {
    List,
    ListIcon,
    Fade,
    ScaleFade,
    Slide,
    SlideFade,
} from '@chakra-ui/react';
import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';
import ListItems from './ListItems';
import { useSelector } from 'react-redux';



const TaskList = ({ status }) => {

    
    //! grab tasks from state
    const tasks = useSelector((state) => {
        return state.tasks;
    });

    //!filter tasks into three categories - all, complete, and active
    const filterTaskList = (tasks) => {
        if (status === 'all') return tasks;
        if (status === 'active') {
            return tasks.filter((task) => task.status === 'active');
        }
        if (status === 'complete') {
            return tasks.filter((task) => task.status === 'complete');
        }
    };
    const filteredTaskList = filterTaskList(tasks);

    //!render each task into a list
    const renderedTaskList = filteredTaskList.map((ele) => {
        return (
            <ListItems
                task={ele.task}
                id={ele.id}
                status={ele.status}
                key={ele.id}
                urgency={ele.urgency}
            />
        );
    });

    return <List spacing={3}>{renderedTaskList}</List>;
};

export default TaskList;
