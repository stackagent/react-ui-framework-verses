import { uiSelectorConsts, promiseConsts } from '../constants'

export const uiSelectorActions = {
    uiSelector,
}

function uiSelector(uiTitle) {
    return {
        type: uiSelectorConsts.UI_SELECTOR,
        payload: uiTitle
    }
}