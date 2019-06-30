import { applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
// import { createLogger } from 'redux-logger'
import { history } from '../history'

// const loggerMiddleware = createLogger();

export const middlewares = applyMiddleware(
    routerMiddleware(history),
    // loggerMiddleware,
);
