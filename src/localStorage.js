export const loadState = () => {
    const localStorageState = localStorage.getItem('state');
    if (localStorageState === null) {
        return undefined;
    }
    return JSON.parse(localStorageState);
};

export const saveState = (state) => {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem('state', localStorageState);
};
