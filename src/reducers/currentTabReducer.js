const currentTabReducer = (state = null, action) => {
    if (action.type === 'UPDATE_TAB') {
        return (state = action.payload);
    }
    return state;
};

export default currentTabReducer;
