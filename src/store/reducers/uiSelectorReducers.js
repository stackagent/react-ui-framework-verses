import { uiSelectorConsts, promiseConsts } from '../constants'

export const initialState = {
    uiTitle: 'Ant',
}

export function uiSelectorReducer(state = initialState, action) {
    switch (action.type) {
        case uiSelectorConsts.LOGIN + promiseConsts.FULFILLED: 
            state = { ...state, uiTitle: action.payload, }
            break;
        default:
            break;
    }
    return state;
}