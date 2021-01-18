const userInput = (state = '', action) => {
    switch (action.type) {
        case 'INPUT_USER':
            return action.payload;
        default:
            return state;
    }
};

export default userInput;
