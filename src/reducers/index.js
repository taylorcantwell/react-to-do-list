import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userInput from './userInput';
import currentTabReducer from './currentTabReducer';

const rootReducer = combineReducers({
    tasks: todoReducer,
    input: userInput,
    activeTab: currentTabReducer,
});

export default rootReducer;
