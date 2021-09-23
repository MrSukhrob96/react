import { DEVIDE_COUNTER, MULTIPLY_COUNTER } from "./types";

const multiplyCounterHandler = (number) => dispatch => {
    return dispatch({
        type: MULTIPLY_COUNTER,
        payload: number
    })
}

const devideCounterHandler = (number) => dispatch => {
    return dispatch({
        type: DEVIDE_COUNTER,
        payload: number
    })
}

export {
    multiplyCounterHandler,
    devideCounterHandler
}

