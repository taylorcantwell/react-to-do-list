import { combineReducers } from 'redux';
import currentTabReducer from './currentTabReducer';
import todoReducer from './todoReducer';
import userInput from './userInput';

const rootReducer = combineReducers({
    tasks: todoReducer,
    input: userInput,
    activeTab: currentTabReducer,
});

export default rootReducer;
