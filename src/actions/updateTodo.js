const updateTodo = (input, id) => {
    return { type: 'UPDATE_TASK', payload: { input, id } };
};

export default updateTodo;
