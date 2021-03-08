import { List } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import ListItems from './ListItems';

const TaskList = ({ status }) => {
    const tasks = useSelector((state) => {
        return state.tasks;
    });

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
