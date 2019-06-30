import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { PreLoader } from './components';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<PreLoader />} persistor={persistor} >
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('viewport'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
