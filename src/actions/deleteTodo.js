const deleteTodo = (id) => {
    return { type: 'DELETE_TASK', payload: id };
};

export default deleteTodo;
