const addTodo = (input) => {
    return { type: 'ADD_TASK', payload: input };
};

export default addTodo;
