import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localforage from 'localforage'

import { middlewares } from './middlewares'

import { history } from './history'
import rootReducer from './reducers'

localforage.config({
    driver:
        localforage.WEBSQL,
    name: 'storeStorage'
});

const persistConfig = {
    key: 'root',
    storage: localforage,
    whitelist: ['selector'] //'trade','withdraw'
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))


export const store = createStore(
    persistedReducer,
    compose(middlewares),
);

export const persistor = persistStore(store);
