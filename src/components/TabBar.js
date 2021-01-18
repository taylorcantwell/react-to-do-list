import React, { useEffect } from 'react';
import TaskList from './TaskList';
import updateTab from '../actions/updateTab';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link as RouterLink,
    Route,
    useLocation,
    useHistory,
} from 'react-router-dom';

import { motion } from 'framer-motion';

import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Link,
} from '@chakra-ui/react';

//! init create chakra and framer motion component
// const MotionTaskList = motion.custom(TaskList);

const TabBar = () => {
    //! init history
    const history = useHistory();
    //! init dispatch
    const dispatch = useDispatch();

    //!Grab from state
    const tasks = useSelector((state) => {
        return state.tasks;
    });

    const activeTab = useSelector((state) => {
        return state.activeTab;
    });

    //! helper function to grab the amount of tasks by status (all, complete, active)
    const countList = (status) => {
        return tasks.filter((task) => {
            return task.status === status;
        }).length;
    };

    //! update active tab when user plugs in a different pathname
    //! necessary to sync active tab piece of state and the url
    const location = useLocation().pathname;
    console.log(location);
    console.log(activeTab);
    if (location === '/all') {
        console.log('this only rerenders twice?');
        dispatch(updateTab(0));
    }
    if (location === '/active') {
        console.log('id as active chaning state');
        dispatch(updateTab(1));
    }
    if (location === '/complete') {
        dispatch(updateTab(2));
    }

    //!update url per last active tab from local storage!
    //!Important for react router to display tab based on url!

    useEffect(() => {
        if (activeTab === 0) {
            history.replace({ pathname: `/all` });
        }
        if (activeTab === 1) {
            history.replace({ pathname: `/active` });
        }
        if (activeTab === 2) {
            history.replace({ pathname: `/complete` });
        }
    }, [activeTab]);

    return (
        <Tabs
            isFitted
            onChange={(index) => dispatch(updateTab(index))}
            defaultIndex={activeTab}
            isLazy
        >
            <TabList>
                <Tab isDisabled={!tasks.length} p={0}>
                    {!tasks.length ? (
                        'All'
                    ) : (
                        <Link w="100%" h="100%" p={2} as={RouterLink} to="/all">
                            {`All (${tasks.length})`}
                        </Link>
                    )}
                </Tab>
                <Tab isDisabled={!countList('active')} p={0}>
                    {countList('active') === 0 ? (
                        'Active'
                    ) : (
                        <Link
                            w="100%"
                            h="100%"
                            p={2}
                            as={RouterLink}
                            to="/active"
                        >
                            {`Active (${countList('active')})`}
                        </Link>
                    )}
                </Tab>
                <Tab isDisabled={!countList('complete')} p={0}>
                    {countList('complete') === 0 ? (
                        'Complete'
                    ) : (
                        <Link
                            w="100%"
                            h="100%"
                            p={2}
                            as={RouterLink}
                            to="/complete"
                        >
                            {`Complete (${countList('complete')})`}
                        </Link>
                    )}
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel py={5} px={0}>
                    <Route path="/all">
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: 'easeOut', duration: 0.5 }}
                        >
                            <TaskList status={'all'} />
                        </motion.div>
                    </Route>
                </TabPanel>

                <TabPanel py={5} px={0}>
                    <Route exact path="/active">
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: 'easeOut', duration: 0.5 }}
                        >
                            <TaskList status={'active'} ve />
                        </motion.div>
                    </Route>
                </TabPanel>

                <TabPanel py={5} px={0}>
                    <Route exact path="/complete">
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: 'easeOut', duration: 0.5 }}
                        >
                            <TaskList status={'complete'} />
                        </motion.div>
                    </Route>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TabBar;
