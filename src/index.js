import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
