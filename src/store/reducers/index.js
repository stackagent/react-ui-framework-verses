import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import { uiSelectorReducer } from './uiSelectorReducers'

import { connectRouter } from 'connected-react-router'
// import { localizeReducer } from "./node_modules/react-localize-redux";


const rootReducer = (history) => combineReducers({
    loadingBar: loadingBarReducer,
    selector: uiSelectorReducer,
    router: connectRouter(history),
    // localize: localizeReducer,
});

export default rootReducer;
