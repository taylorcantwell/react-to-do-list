const completeToDo = (id) => {
    return { type: 'COMPLETE_TASK', payload: id };
};

export default completeToDo;
