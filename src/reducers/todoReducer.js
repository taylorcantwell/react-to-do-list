const { uuid } = require('uuidv4');

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    task: action.payload,
                    status: 'active',
                    urgency: 'Non-urgent',
                    id: uuid(),
                },
            ];

        case 'DELETE_TASK':
            return state.filter((task) => {
                return task.id !== action.payload;
            });

        case 'COMPLETE_TASK':
            return state.map((task) => {
                if (task.id === action.payload) {
                    task.status = 'complete';
                    return task;
                } else return task;
            });

        case 'REDO_TASK':
            return state.map((task) => {
                if (task.id === action.payload) {
                    task.status = 'active';
                    return task;
                } else return task;
            });

        case 'UPDATE_TASK':
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    let input =
                        action.payload.input === ''
                            ? 'empty input!'
                            : action.payload.input;
                    console.log(input);
                    task.task = input;
                    return task;
                } else return task;
            });

        case 'DELETE_ALL':
            return [];

        case 'UPDATE_URGENCY':
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    console.log(action.payload.urgency);
                    task.urgency = action.payload.urgency;
                    return task;
                } else return task;
            });

        default:
            return state;
    }
};

export default todoReducer;
