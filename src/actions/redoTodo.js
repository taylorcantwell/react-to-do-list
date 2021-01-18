const redoTodo = (id) => {
    return { type: 'REDO_TASK', payload: id };
};

export default redoTodo;
