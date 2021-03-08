import {
    Link,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link as RouterLink,
    Route,
    useHistory,
    useLocation,
} from 'react-router-dom';
import updateTab from '../actions/updateTab';
import TaskList from './TaskList';

const TabBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const tasks = useSelector((state) => {
        return state.tasks;
    });

    const activeTab = useSelector((state) => {
        return state.activeTab;
    });

    const countList = (status) => {
        return tasks.filter((task) => {
            return task.status === status;
        }).length;
    };

    const location = useLocation().pathname;

    if (location === '/all') {
        dispatch(updateTab(0));
    }
    if (location === '/active') {
        dispatch(updateTab(1));
    }
    if (location === '/complete') {
        dispatch(updateTab(2));
    }

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
    }, [activeTab, history]);

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
